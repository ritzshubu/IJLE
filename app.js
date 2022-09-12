const express = require("express");
const fs = require('fs');
const app = express();
const cors = require("cors");
const pool = require("./db");
const nodemailer = require("nodemailer");
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
const path= require("path");
var cookieParser = require('cookie-parser');

//process.env
//"heroku-postbuild": "cd client && npm install && npm run build"


//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(fileUpload());

if(process.env.NODE_ENV === "production"){
    //serve static content
    app.use(express.static(path.join(__dirname, "client/build")));
}

//=============================================================User Requests=============================================================//
//=============================================================User Requests=============================================================//
//=============================================================User Requests=============================================================//

//send editor password
app.get("/app/editorDashboardRestrictedPassword", async(req, res)=>{
    try {
        // read contents of the file
        const data = fs.readFileSync('./password.txt', 'UTF-8');
        
        // send password
        res.send(data);
        return data;
        
        } catch (err) {
        console.error(err);
    }
})

//send ssl file
app.get("/.well-known/acme-challenge/KHDeoIx6PY1YtmlAO8zBKBAmC5R0R0gAufd7-5DH_nU", async(req, res)=>{
    try {
        // read contents of the file
        const data = fs.readFileSync('./.well-known/acme-challenge/KHDeoIx6PY1YtmlAO8zBKBAmC5R0R0gAufd7-5DH_nU');
        
        // send password
        res.send(data);
        return data;
        
        } catch (err) {
        console.error(err);
    }
})

//change editor password
app.post("/app/changeDashboardPassword", async(req, res)=>{
    const data = req.body;
    console.log(data.password);
    // write data to file sample.html
    fs.writeFile('./password.txt',data.password, 'UTF-8',
        // callback function that is called after writing file is done
        function(err) {     
            if (err) throw err;
            // if no error
            console.log("Password Changed Successfully.")
    });
})

//application status
app.get("/app/status/:pid", async(req, res) =>{
    try {
        const sender = req.params;
        const allContacts = await pool.query("SELECT * FROM applications where paperid = $1", [sender.pid]);
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//get all published papers by date asc
app.get("/app/latestArticles/articles", async(req, res) =>{
    try {
        const sender = req.params;
        console.log(sender.sender);
        const allContacts = await pool.query("SELECT * FROM publishedArticles order by publishedon desc;");
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//get all published papers by popularity
app.get("/app/popularArticles/articles", async(req, res) =>{
    try {
        const sender = req.params;
        console.log(sender.sender);
        const allContacts = await pool.query("SELECT * FROM publishedArticles order by abstract;");
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//search articles by key terms
app.get("/app/searchArticles/:tag", async(req, res) =>{
    try {
        const sender = req.params;
        const query = "SELECT * FROM publishedArticles where papertitle::text like '%"+sender.tag+"%';"
        console.log(query);
        const allContacts = await pool.query(query);
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//file upload
app.post("/app/publish/uploadForReviewDoc", async(req, res)=>{
    if (!req.files) {
        console.log("=================================File not found=================================");
    }
    console.log("accessing the file");
    const myFile = req.files.file;
    console.log(myFile)
    //  mv() method places the file inside forReviewUploads directory
    myFile.mv(`${__dirname}/forReviewUploads/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})


//subscribe
app.post("/app/subscribe", async(req, res) => {
    try {
        const email = req.body;
        console.log(email);
        
        
        let transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 587||25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "query@ijle.org",
                pass: "Dec@02126",
            },
            domains: ["ijle.org", "smtp.secureserver.net", "godaddy.com"]
        });

        const aknowledgeHTML = `
            <br/><br/><br/><br/>
            <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
                Hi ${email.name},<br/><br/>
                You are now subscribed to IJLE. From now on you'll be getting latest news and notifications on the following:<br/><br/>
                email address - ${email.email}<br/>
                phone number - ${email.phone}<br/><br/><br/>

                <a href="www.ijle.org">Visit IJLE Website</a>

            </p>
            <br/><br/>
            <br/><br/><br/><br/>
        `;
          
        let info = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: email.email, // list of receivers
            subject: "New Subscription", // Subject line,
            text: "New Subscription", // plain text body
            html: aknowledgeHTML, // html body
          });

          const editorHTML = `
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
          Hi Publisher,<br/><br/>
          A new user has subscribed to IJLE. please add him/het to the mailing list to send latest news and notifications on the following:<br/><br/>
          name - ${email.name}<br/>
          email address - ${email.email}<br/>
          phone number - ${email.phone}<br/><br/><br/>

          <a href="www.ijle.org">Visit IJLE Website</a>
          </p>
          <br/><br/>
          <br/><br/><br/><br/>
        <br/><br/><br/><br/>
          `;

          let notification = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: "publisher@ijle.org", // list of receivers
            subject: "New Subscription", // Subject line,
            text: "New Subscription", // plain text body
            html: editorHTML, // html body
          });

          console.log("Email Sent");
          console.log(email);

          res.send({"success": true});

    } catch (error) {
        console.error(error);
    }
})

//email
app.post("/app/publish/submit", async(req, res) => {
    try {
        const email = req.body;
        console.log(email);
        
        var a = new Date();
        var m = a.getTime();

        var n = "IJLE"+m.toString();
        console.log(n);
        const addApp = await pool.query(
            "INSERT INTO applications(authName, authMail, paperTitle, abstract, paperID, filePath, appStatus) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [email.author, email.email, email.title, email.abstract, n, email.file, "To be reviewed"]
        );
        
        let transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 587||25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "query@ijle.org",
                pass: "Dec@02126",
            },
            domains: ["ijle.org", "smtp.secureserver.net", "godaddy.com"]
        });

        const aknowledgeHTML = `
            <br/><br/><br/><br/>
            <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
                Dear Author,<br/><br/>
                We are glad to inform you that your manuscript titled <strong>“${email.title}”</strong> has been submitted successfully. The said manuscript is presently under consideration for publication in International Journal of Legal Expatiate.<br/><br/>
                <span style='padding: 10px 20px; background: #fcfcfc; color: #0e1e1e; border: 1px solid; border-radius: 8px; display: block; margin: auto; width: 500px, max-width: 90vw'>Your manuscript ID is ${n}</span></br><br/>
                The manuscript is subject to acceptance, rejection, or revision. The status of your work will be intimated to you within 10 days of submission. In case of acceptance, the corresponding author is expected to pay the Article Processing Charges of 1200 INR.<br/>
                Please mention the Manuscript ID in any future correspondence regarding the manuscript.</br><br/>
                Thank you for submitting your manuscript to Indian Journal of Human Development.</br><br/>
                Thank you for considering our journal as a venue to showcase your distinctive piece of research work. In case of any query, feel free to write to us at query@ijle.co.in</br></br>
                Warm regards,</br> 
                Editor in chief</br> 
                IJLE</br></br>

                More at: ijle.org 
            </p>
            <br/><br/>
            <br/><br/><br/><br/>
        `;
          
        let info = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: email.email, // list of receivers
            
            subject: "Thank you for submitting your paper", // Subject line
            attachments:[
                {
                    name: email.file,
                    path: "./forReviewUploads/" + email.file
                }
            ],
            text: "Aknowledgement for paper submisison", // plain text body
            html: aknowledgeHTML, // html body
          });

          const editorHTML = `
          <br/><br/><br/><br/>
          <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
              Dear Editor,<br/>
              A new author has submitted a paper for publishing. You can take a look at the paper and review it accordingly. These are the submitted details:</br></br>

              Author Name: ${email.author}</br>
              Author Email: ${email.email}</br>
              Paper ID: ${n}</br>
              Paper Title: ${email.title}</br>
              Paper Abstract: ${email.abstract}</br>
              The draft copy has been attached to the mail for reviewing.</br></br>

              Warm regards,</br> 
              AutoMailer</br> 
              IJLE</br></br>

              More at: ijle.org
          </p>
          <br/><br/>
          <br/><br/><br/><br/>
        <br/><br/><br/><br/>
          `;

          let notification = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: "editor@ijle.org", // list of receivers
            
            subject: "Thank you for submitting your paper", // Subject line
            attachments:[
                {
                    name: email.file,
                    path: "./forReviewUploads/" + email.file
                }
            ],
            text: "Aknowledgement for paper submisison", // plain text body
            html: editorHTML, // html body
          });

          console.log("Email Sent");
          console.log(email);

          res.send({"success": true});

    } catch (error) {
        console.error(error);
    }
})


//=============================================================Editor Requests=============================================================//
//=============================================================Editor Requests=============================================================//
//=============================================================Editor Requests=============================================================//

//get all unpublished papers
app.get("/app/editorUnpublished/articles", async(req, res) =>{
    try {
        const sender = req.params;
        console.log(sender.sender);
        const allContacts = await pool.query("SELECT * FROM applications where appstatus::text not like '%Published%';");
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//get all published papers
app.get("/app/editorPublished/articles", async(req, res) =>{
    try {
        const sender = req.params;
        console.log(sender.sender);
        const allContacts = await pool.query("SELECT * FROM publishedArticles;");
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//show article
app.get("/app/loadArticle/:filepath", async(req, res) =>{
    try {
        const sender = req.params.filepath;
        const file = __dirname + "/finalUploads/" + sender;
        if(!file){
            res.send("No File Found");
            console.log("No File Found");
        }
        else{
            const options = {
                dotfiles: 'allow',
            }
            res.sendFile(path.join(__dirname, './finalUploads/', sender), options);
            console.log(path.join(__dirname, './finalUploads/', sender));
        }
    } catch (error) {
        console.error(error);
    }
})

//downloadarticle
app.get("/app/downArt/:filepath", async(req, res) => {
    try {
        const sender = req.params.filepath;
        const file = __dirname + "/forReviewUploads/" + sender;
        if(!file){
            res.send("No File Found");
            console.log("No File Found");
        }
        else{
            const options = {
                dotfiles: 'allow',
            }
            res.sendFile(path.join(__dirname, './forReviewUploads/', sender), options);
            console.log(path.join(__dirname, './forReviewUploads/', sender));
        }
    } catch (error) {
        console.error(error);
    }
})

//delete published article
app.delete("/app/deletePublishedArticle/:id", async(req, res) => {
    try {   
        const sender = req.params.id;
        const filename = await pool.query("SELECT filepath FROM publishedArticles WHERE paperid = $1", [sender]);
        const file = __dirname + "/finalUploads/" + filename.rows[0].filepath;
        console.log(file);
        if(!file){
            res.send("No File Found");
            console.log("No File Found");
        }
        else{
            fs.unlinkSync(file);
            res.send("File Deleted");
            const deleteFromDB = await pool.query("Delete FROM publishedArticles where paperid = $1", [sender]);
            console.log("File Deleted");
        }
    }
    catch (error) {
        console.error(error);
    }
})

//delete unpublished article
app.delete("/app/deleteUnpublishedArticle/:id", async(req, res) => {

    try {   
        const sender = req.params.id;
        const filename = await pool.query("SELECT filepath FROM applications WHERE paperid = $1", [sender]);
        const file = __dirname + "/forReviewUploads/" + filename.rows[0].filepath;
        console.log(file);
        if(!file){
            res.send("No File Found");
            console.log("No File Found");
        }
        else{
            fs.unlinkSync(file);
            res.send("File Deleted");
            const deleteFromDB = await pool.query("Delete FROM applications where paperid = $1", [sender]);
            console.log("File Deleted");
        }
    }
    catch (error) {
        console.error(error);
    }
})

//download published article
app.get("/app/downArtFin/:filepath", async(req, res) => {
    try {
        const sender = req.params.filepath;
        const file = __dirname + "/finalUploads/" + sender;
        if(!file){
            res.send("No File Found");
            console.log("No File Found");
        }
        else{
            const options = {
                dotfiles: 'allow',
            }
            res.sendFile(path.join(__dirname, './finalUploads/', sender), options);
            console.log(path.join(__dirname, './finalUploads/', sender));
        }
    } catch (error) {
        console.error(error);
    }
})

//get details for final publishing
app.get("/app/publishArticle/articles/:id", async(req, res) =>{
    try {
        const sender = req.params;
        console.log(sender.id);
        const allContacts = await pool.query("SELECT * FROM applications where paperid = $1", [sender.id]);
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})


//file upload
app.post("/app/finalPublish/uploadFinalDoc", async(req, res)=>{
    if (!req.files) {
        console.log("=================================File not found=================================");
    }
    console.log("accessing the file");
    const myFile = req.files.file;
    console.log(myFile)
    //  mv() method places the file inside forReviewUploads directory
    myFile.mv(`${__dirname}/finalUploads/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

//email
app.post("/app/finalPublish/submit", async(req, res) => {
    try {
        const email = req.body;
        console.log(email);

        var a = new Date();
        var d = a.getFullYear();
        
        // read contents of the file
        const count = fs.readFileSync('./paperCnt.txt', 'UTF-8');

        var m = count;
        m++;

        var n = "IJLE-"+d.toString()+"-"+m.toString();

        const addApp = await pool.query(
            "INSERT INTO publishedArticles(authName, authMail, paperTitle, abstract, paperID, filePath, appStatus, issue, volume) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", 
            [email.author, email.email, email.title, email.abstract, n, email.file, "Published", email.issue, email.volume]
        );

        fs.writeFile('./paperCnt.txt', m, 'UTF-8',
        // callback function that is called after writing file is done
        function(err) {     
            if (err) throw err;
            // if no error
            console.log("Paper Count Updated.")
        });
        
        let transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 587||25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "query@ijle.org",
                pass: "Dec@02126",
            },
            domains: ["ijle.org", "smtp.secureserver.net", "godaddy.com"]
        });

        var a = new Date();
        var d = a.getFullYear();

        const aknowledgeHTML = `
            <br/><br/><br/><br/>
            <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
                Dear Author,<br/>
                We are pleased to inform you that your paper has been successfully published in the International Journal of Legal Expatiate (ISSN: 000000-0000). Following are the details regarding the published paper.<br/>
                <br/>
                Paper ID	: ${n}<br/>
                Title of Paper	: ${email.title}<br/> 
                Publication Date: ${d}<br/>
                Application ID: ${email.pid}<br/>                
                <br/><br/>
                Thank you so much for choosing to  publish your article in IJLE. We would appreciate your continued support by sharing your knowledge in the form of your insightful writing work for our journal IJLE.
                <br/><br/>
                Editor In Chief,<br/>
                International Journal of Legal Expatiate 

                more at: www.ijle.org | editor@ijle.org

            </p>
            <br/><br/>
            <br/><br/><br/><br/>
        `;
          
        let info = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: email.email, // list of receivers
            
            subject: "Publication of paper at International Journal of Legal Expatiate", // Subject line
            attachments:[
                {
                    name: email.file,
                    path: "./finalUploads/" + email.file
                }
            ],
            text: "Aknowledgement for paper submisison", // plain text body
            html: aknowledgeHTML, // html body
          });

          const editorHTML = `
          <br/><br/><br/><br/>
          <p style="font-family: 'San Francisco', 'Open Sans', 'Helvetica Neue', 'Roboto', 'Segoe UI'; font-size: 20px; width: 80%; display: block; margin: 4vh auto; box-shadow: 4px 4px 8px #acacac; padding: 10px 20px;">
              Dear Editor,<br/>
              A new paper has been published. These are the submitted details:</br></br>

              <br/>
              Paper ID	: ${n}<br/>
              Title of Paper	: ${email.title}<br/> 
              Publication Date: ${d}<br/>
              Application ID: ${email.pid}<br/>                
              <br/><br/>

              Warm regards,</br> 
              Editor</br> 
              IJLE</br></br>

              More at: ijle.co.in 
          </p>
          <br/><br/>
          <br/><br/><br/><br/>
        <br/><br/><br/><br/>
          `;

          let notification = await transporter.sendMail({
            from: '"IJLE Automailer" <query@ijle.org>',
            to: "editor@ijle.org", // list of receivers
            
            subject: "Publication of paper at International Journal of Legal Expatiate", // Subject line
            attachments:[
                {
                    name: email.file,
                    path: "./finalUploads/" + email.file
                }
            ],
            text: "Aknowledgement for paper submisison", // plain text body
            html: editorHTML, // html body
          });

          console.log("Email Sent");
          console.log(email);

          res.send({"success": true});

        const remApp = await pool.query(
            "update applications set appstatus='Published' where paperid=$1", 
            [email.pid]
        );


    } catch (error) {
        console.error(error);
    }
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(PORT, () =>{
    console.log("server has started on port " + PORT);
})