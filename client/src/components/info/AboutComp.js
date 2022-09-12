import React, { Fragment } from "react";
import NavigationView from "../NavigationComp";

const AboutView = () => {


    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <h5>About Us</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    IJLE is a multidisciplinary, open access double peer-reviewed journal that publishes theoretical and empirical research and serves as a forum for critical engagement with legal development discourses. Scholarly essays, research notes, commentaries, perspectives, and book reviews, as well as information on legal events and statistics, are welcomed to be published in the Journal. It accepts a wide range of expressions and viewpoints. The journal encourages simple yet comprehensible language, the idea is to make the reader connect to the content accessed by them.<br/><br/>
                    <table border = "3px solid black">
  <tr>
    <th>Title</th>
    <th>International Journal of Legal Expatiate</th>
  </tr>
  <tr>
    <td>Frequency </td>
    <td>Bi-monthly </td>
  </tr>
  <tr>
    <td>ISSN </td>
    <td>   </td>
  </tr>
  <tr>
    <td>Publisher </td>
    <td>International Journal of Legal Expatiate  </td>
  </tr>
  <tr>
    <td>Chief editor  </td>
    <td>Abhishek Thommandru </td>
  </tr>
  <tr>
    <td>Copyright/ Trademark  </td>
    <td>International Journal of Legal Expatiate  </td>
  </tr>
  <tr>
    <td>Starting year  </td>
    <td>2021 </td>
  </tr>
  <tr>
    <td>Subject  </td>
    <td>Multi disciplinary </td>
  </tr>
  <tr>
    <td>Language  </td>
    <td>English  </td>
  </tr>
  <tr>
    <td>Publication Format </td>
    <td>Online </td>
  </tr>
  <tr>
    <td>Phone no. </td>
    <td>9916028110 </td>
  </tr>
  <tr>
    <td>Email address </td>
    <td><a href="mailto:editor@ijle.org">editor@ijle.org </a></td>
  </tr>
  <tr>
    <td>Website </td>
    <td><a href="http://www.ijle.org">www.ijle.org </a></td>
  </tr>
  <tr>
    <td>Address  </td>
    <td> 15/193, Indira Nagar<br/> Lucknow, UP, IN- 226016 
  </td>
  </tr>
</table> 
                </p>
                <br/><br/>
                <h5>Aim and Scope</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    The IJLE aims to contribute to the advancement and dissemination of knowledge in the fields of Law and Social Science. IJLE publishes papers on a broad range of topics in the areas of Law and Social sciences, which hold much promise for the future, are also within the scope of IJLE.
                    <br/><br/>Thus, manuscripts focusing on only optimization of some objective function based on a conventional statistical approach will be editorially rejected.
                    <br/><br/>This journal follows the objective of the <a href="https://publicationethics.org/about/our-organisation" target="_blank" rel="noreferrer">Committee on Publication Ethics (COPE)</a>.
                </p>
                <br/><br/>
                <h5>Why publish with us</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    There are many benefits for publishing your article with IJLE. A few to mention are:<br/><br/>
                        •	Rigorous peer review of the research work<br/>
                        •	Timely publication<br/>
                        •	Multidisciplinary readers<br/>
                        •	Scope of highly global exposure<br/>

                </p>
            </div>

        </Fragment>
    );
}

export default AboutView;
