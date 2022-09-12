import React, { Fragment } from "react";
import NavigationView from "../NavigationComp";

const GuidelinesView = () => {


    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <h5>Submission Guidelines</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    <strong>1.	Word Limit:</strong> As has already been indicated, the maximum word limit for articles and essays are between 4000-5,000 words and 3000-4000 words respectively (exclusive of footnotes) whereas that for notes and comments is 2,500 words (exclusive of footnotes).
                    <br/><br/>
                    <strong>2.	Citation Format:</strong> The citation format to be used is The Bluebook 20th ed. Or APA (Citation style must be indicated while submission of the article)
                    <br/><br/>
                    <strong>3.	Biographical Information of Authors:</strong> A separate document with biographical information of the authors must also be attached including the following details: Name, E mail address, Postal Address, Name and Address of Institution, Course (if applicable), Academic Year.
                    <br/><br/>
                    <strong>4.	Mode of submission:</strong> All submissions must be made in electronic form. The manuscript should be typed in MS Word (.doc or .docx format) , double spaced, font type as Times New Roman in font size 12, with a left margin of 1.5 inches and send it to: editor@ijle.org
                    <br/><br/>
                    <strong>5.	Abstract:</strong> Abstract of the paper in 250-300 words should be sent with the electronic submissions.
                    <br/><br/>
                    <strong>6.	Article Processing Charges:</strong> The corresponding author will have to pay 1200 INR or 20 USD after the acceptance of the paper.  
                    <br/><br/>
                    <strong>7.	Communication of Acceptance:</strong> The receipt of submission will be conveyed in 3 working days from the date of submission. The decision on the acceptance of the paper for publication will be that of the Editorial Board, which shall be final. The decision of acceptance will be communicated to the contributor within 15-20 days of receiving the submission.
                    <br/><br/>
                     <strong>8. Plagiarism Policy:</strong> UGC guidelines shall be followed for checking the plagiarism in the articles. We do not accept papers that have plagiarized contents. Good quality plagiarism software/ tool (Turnitin/ iThenticate) will be used to check similarities that would not be more than 20% including reference section. In the case of exclusion of references, it should be less than 5%.
                    <br/><br/>
                
                </p>
                <br/><br/>
            </div>

        </Fragment>
    );
}

export default GuidelinesView;
