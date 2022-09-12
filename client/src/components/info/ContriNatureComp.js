import React, { Fragment } from "react";
import NavigationView from "../NavigationComp";

const ContriNatureView = () => {


    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <h5>Nature of Contributions</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    <strong>1.	Articles:</strong> An article must undergo a comprehensive examination of the legal topic that the author wishes to highlight. It must include a compendious review of existing law, highlighting any flaws, and a proposal for modifications to solve the flaws. Article may also research regarding an existing theory more closely and test it out. An article should be between 4,000-5,000 words.
                    <br/><br/>
                    <strong>2.	Essays:</strong> An essay is more audacious as it questions prevailing paradigms/norms and offers a new perspective on common issues. In terms of scope and idea, essays are strongly encouraged to be shorter than articles. An essay is thus advised to be between 3,000-4,000 words.
                    <br/><br/>
                    <strong>3.	Notes:</strong> A note is a condensed version of an argument presented by the author. The focus of a note should be on a recent discussion or issue over the law's interpretation or application. The writers are required to give a solution to the authors' notes, which will mostly emphasise current concerns that need to be solved. The maximum word limit for a manuscript in the form of note is 2,500 words.
                    <br/><br/>
                    <strong>4.	Comments:</strong> A comment is where the author may decide to critique any recent/landmark judicial pronouncement or any recent legislation or bill before the Parliament or State Legislature. The word limit for a comment is 2,500 words.
                    <br/><br/>
                </p>
                <br/><br/>
            </div>

        </Fragment>
    );
}

export default ContriNatureView;