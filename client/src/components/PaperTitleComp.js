import React, { Fragment, useState, useEffect } from "react";

const PaperArticle = ({article}) => {

    //open pdf file in new tab
    const openArtNewTab = async () =>{
        try {
            window.open(`/app/loadArticle/${article.filepath}`, '_blank');
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <Fragment>
            <h6 onClick={openArtNewTab} style={{color: '#0065af'}}>{article.papertitle}</h6>
        </Fragment>
    );
}

export default PaperArticle;