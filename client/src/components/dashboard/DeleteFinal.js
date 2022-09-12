import React, { Fragment, useState, useEffect } from "react";

const DeleteFinal = ({article}) => {
    
    const deleteFinalArticle = async () => {
        try {
            const result = await fetch(`/app/deletePublishedArticle/${article.paperid}`,{
                method: 'DELETE',
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Fragment>
            <button className="primary_red small" onClick={deleteFinalArticle}>Delete</button>
        </Fragment>
    );
}

export default DeleteFinal;