import React, { Fragment} from "react";
import { NavLink } from "react-router-dom";

const ChatBotView = () => {

    const openChatBot = () =>{
        setTimeout(
            function(){
                document.getElementById("chatbotContainer").style.display=("block");
            }, 400);
    }
    const closeChatBot = () =>{
        setTimeout(
            function(){
                document.getElementById("chatbotContainer").style.display=("none");
            }, 400);
    }

    const openWhatsappWindow = () =>{
        window.open("https://web.whatsapp.com/send?phone=917893118627");
    }
    const openMailBox = () =>{
        window.open("mailto:chat.bot@ijle.org");
    }

    const showProductQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("productQueries").style.display=("block");
            }, 400);
    }
    const showGeneralQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("generalQueries").style.display=("block");
            }, 400);
    }
    const showDeadlineQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("deadlineQueries").style.display=("block");
            }, 400);
    }
    const showApplicationQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("applicationQueries").style.display=("block");
            }, 400);
    }
    const showAddtionalQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("additionalQueries").style.display=("block");
            }, 400);
    }
    const showTimelineQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("timelineQueries").style.display=("block");
            }, 400);
    }
    const showAPCQueries = () =>{
        setTimeout(
            function(){
                document.getElementById("apcQueries").style.display=("block");
            }, 400);
    }

    return(
        <Fragment>
            <button className="primary_inverted largeNavButton right" onClick={openChatBot}>Chat with us</button>

            <div id="chatbotContainer">
                <div id="init">
                    <h5>NIMA Bot</h5>
                    <hr/>
                    <div className="botMessage">
                        Hi,<br/><br/>
                        My name is Nima, I am your smart assistant ready to help you with FAQs related to IJLE. What do you want get info on?
                    </div>
                    <button className="convOpt" onClick={showProductQueries}>Product Queries</button>
                    <button className="convOpt" onClick={showGeneralQueries}>General Queries</button>
                </div>

                <div id="productQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to get help on Product Based Queries.
                    </div>
                    <div className="botMessage">
                        What product related help do you want?
                    </div>
                    <button className="convOpt" onClick={showApplicationQueries}>Track my application</button>
                    <button className="convOpt" onClick={openWhatsappWindow}>Chat on Whatsapp</button>                    
                </div>

                <div id="applicationQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to track my Application.
                    </div>
                    <div className="botMessage">
                        It is very easy to track your application with us. Once you apply for publishing your paper, you will be provided a aknowledgement mail which includes a Paper ID.<br/><br/>
                        You can use your Paper ID to track your application progress <NavLink to="/app/articleStatus">Here</NavLink>.
                    </div>                   
                </div>

                <div id="generalQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to get help on General Queries.
                    </div>
                    <div className="botMessage">
                        What general query do you want to solve?
                    </div>
                    <button className="convOpt" onClick={showDeadlineQueries}>Deadlines and APC</button>
                    <button className="convOpt" onClick={showAddtionalQueries}>Something Else</button>                     
                </div>

                <div id="deadlineQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to get help on Deadlines and APC.
                    </div>
                    <div className="botMessage">
                        What type of deadline related query do you want to address?
                    </div>
                    <button className="convOpt" onClick={showTimelineQueries}>When will my paper be published</button>
                    <button className="convOpt" onClick={showAPCQueries}>What is APC for publishing my paper</button>
                    <button className="convOpt" onClick={openWhatsappWindow}>Chat on Whatsapp</button>                    
                </div>

                <div id="timelineQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        What is the general timeline of a paper publishing.
                    </div>
                    <div className="botMessage">
                        We generally publish two issues in a month(bimonthly). And it takes at most 10 business days to go through any application. So if you apply for your article today, it has very good chance to be published in next month.<br/><br/>
                        What are you waiting for, <NavLink to="/app/publish">Apply Now</NavLink>
                    </div>
                </div>

                <div id="apcQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to get help on Deadlines and APC.
                    </div>
                    <div className="botMessage">
                        Once your paper gets accepted(you will receive a mail for the same). You will get a secure payment link over which you can make the payment for your article publishing.<br/><br/>
                        It is one time payment of Rs. 1200 for publishing your article after which it will be published.
                    </div>
                </div>

                <div id="additionalQueries" style={{display: "none"}}>
                    <div className="userMessage">
                        I want to get help on Something Else.
                    </div>
                    <div className="botMessage">
                        For additional help why don't you, 
                    </div>
                    <button className="convOpt" onClick={openMailBox}>Write a Mail</button>
                    <button className="convOpt" onClick={openWhatsappWindow}>Chat on Whatsapp</button>                     
                </div>

                <button className="closeChatBtn" onClick={closeChatBot}>x</button>
            </div>
        </Fragment>
    );
}

export default ChatBotView;

/*
    Done for now. To be added:
    1. New component for Navigation and Account options
    2. Whatsapp chat link for Chat with us button
*/