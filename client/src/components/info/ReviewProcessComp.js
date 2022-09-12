import React, { Fragment } from "react";
import NavigationView from "../NavigationComp";

const ReviewProcessView = () => {


    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <h5>The Review Process</h5>
                <hr className="left" style={{width: "40%"}}/><br/>
                <p className="large12 small12">
                    All manuscripts are confidential and are reviewed by members of Editorial Board, and qualified referees. Reviews are normally completed within 3 to 4 weeks from receipt of the manuscripts and the corresponding author will be notified of the editor’s decision to accept, reject, or require revision. Note that manuscripts may be editorially rejected without review, based on lack of conformity to the standards set forth in these instructions. 
                    <br/><br/>When requested for revision, authors must submit the revised version along with a point-by-point response to each reviewer and the editor. If the revision is not submitted within 30 days, the submission will be withdrawn, and any revised version will be considered as a new submission. Additional time for revision is granted upon request, at the discretion of the editor. Manuscripts that have been rejected or withdrawn may be resubmitted with appropriate modifications based on the editor’s comments. 
                    <br/><br/>In such cases, the revised version must be submitted as a new submission, accompanied by the former manuscript number, and detailed response to original reviewers, but not be sent to the original editor directly.
                    <br/><br/><strong>Notification of acceptance:</strong> Once a decision has been made on an article, the corresponding author will be notified. If the article is accepted, it will be entered into publication system and the corresponding author will receive an acknowledgement letter containing the production reference number, accompanied by an offprint order form and a copyright transfer form.
                    <br/><br/><strong>Proofs:</strong> The corresponding author will receive one set of page proofs in PDF format by publication department. The address for return of corrected proofs will be clearly indicated in that proof e-mail.
                    <br/><br/><strong>Reprints:</strong> The corresponding author, at no cost, will be provided with a PDF file of the article via e-mail. The PDF file is a watermarked version of the published article and includes a cover sheet with the journal cover image and a disclaimer outlining the terms and conditions of use.

                </p>
                <br/><br/>
            </div>

        </Fragment>
    );
}

export default ReviewProcessView;