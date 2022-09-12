import React, { Fragment, useState, useEffect } from "react";

const DeleteUnpublished = ({article}) => {
    
    const deleteArticle = async () => {
        try {
            const result = await fetch(`/app/deleteUnpublishedArticle/${article.paperid}`,{
                method: 'DELETE',
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Fragment>
            <button className="primary_red small" onClick={deleteArticle}>Delete</button>
        </Fragment>
    );
}

export default DeleteUnpublished;