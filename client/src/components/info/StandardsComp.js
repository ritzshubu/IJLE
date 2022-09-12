import React, { Fragment } from "react";
import NavigationView from "../NavigationComp";

const StandardsView = () => {


    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <h5>Editing Standards</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    <strong>General requirements:</strong> Manuscripts submitted to the journal must represent reports of unpublished original research, which are not under consideration for publication elsewhere in any medium. Related manuscripts that are in press or submitted elsewhere must accompany the submission. The submission for publication must be approved by all authors.
                    <br/><br/>
                    <strong>Permissions:</strong> The corresponding author must obtain permission from the copyright owner to reproduce figures or tables that have been published elsewhere and credit the sources in the relevant figure legend or table footnote of the manuscript. Authors of open access articles published in this journal retain the copyright of their articles and are free to reproduce and disseminate their work.
                    <br/><br/>
                    <strong>Authorship:</strong> Authorship credit should be based on substantial contributions to the overall design and execution of the work. The corresponding author (the single person to whom all the correspondence on the manuscript should be addressed) is responsible for ensuring that all contributors meet the authorship criteria and for informing all authors of the manuscript’s status throughout the review and publication process. The order of authorship on the by-line should be a joint decision of the co-authors. Statements regarding equal contributions by two or more authors (e.g., the first two authors contributed equally to this work) are permitted as footnotes to by-lines.
                    <br/><br/>
                    <strong>Conflict of interest:</strong> Authors are requested at the time of submission to disclose any commercial association as well as consulting, stock ownership, equity interests, and patent-licensing arrangements that might pose a conflict of interest in connection with their submitted paper. Sources of any financial support of the project must be credited in the Acknowledgments section.
                    <br/><br/>
                    <strong>Copyright:</strong> The author(s) shall be required to acknowledge submission of original, not previously or simultaneously published work by submitting the duly filed and signed copyright form in the format provided by the journal. (Link for copyright form)
                    <br/><br/>
                    <strong>Disclaimer:</strong> IJLE assumes no responsibility for the statements and opinions advanced by the contributors to the Society’s publications. Editorial views do not necessarily represent the position of IJLE. The use of trade names does not imply endorsement by IJLE.
                    <br/><br/>
                    <strong>Correction of English:</strong> IJLE strongly recommends authors whose first language is not English to have their manuscripts checked by language editing services prior to submission. Manuscripts that do not conform to Standard English usage may be editorially rejected and returned to the authors. Manuscripts under review may be sent to language correction at the editor’s discretion. In such case, the costs must be borne by the author. No waiver application will be considered. For authors who require information about language editing and copyediting services pre- and post-submission, please contact for more information.
                    <br/><br/>
                </p>
                <br/><br/>
            </div>

        </Fragment>
    );
}

export default StandardsView;