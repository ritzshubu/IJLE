import React, { Fragment, useState, useEffect } from "react";

const ArticleView = ({article}) => {
    
    const [pdfFiletoPrint, setFile] = useState(''); // storing the uploaded file

    const getArticlePDF = async () =>{
        try {
            const response = await fetch(`/app/loadArticle/${article.filepath}`);
//            const jsonData = await response.json();

            setFile(response);
        } catch (error) {
            console.error(error);
        }
    }

    var link = `/app/loadArticle/${article.filepath}`;

    const openmod1 = async () => {
        getArticlePDF();

        document.getElementById(`id${article.paperid}`).classList.remove('hide');
        document.getElementById(`id${article.paperid}`).classList.add('show');
    }
    const closemod1 = () => {
        document.getElementById(`id${article.paperid}`).classList.remove('show');
        document.getElementById(`id${article.paperid}`).classList.add('hide');
    }
    const truncateText = (selector, maxLength) => {
        var element = document.querySelector(selector),
            truncated = element.innerText;
    
        if (truncated.length > maxLength) {
            truncated = truncated.substr(0,maxLength) + '...';
        }
        return truncated;
    }
    useEffect(() => {
        document.querySelector('p').innerText = truncateText('p', 300);
    }, []);

    return(
        <Fragment>

            <button onClick={openmod1} className="primary_blue button center">Read Full Article</button>
            <div className="articleViewContainer hide" id={`id${article.paperid}`}>
                <div className="articleViewContent zi3" id={`class${article.paperid}`}> 
                        <div className="dialogue_pane large12 medium12 small12">
                            <span className="modal_title" style={{margin: "10px, 5px"}}>{article.papertitle}</span>
                            <button onClick={closemod1} className="primary_red right ta_center mod_close_btn">X</button>
                        </div>
                        <div className="paddart">
                            <object width="100%" style={{height: "90vh"}} data={pdfFiletoPrint.url} type="application/pdf">   </object>
                        </div>  
                </div>  
            </div>  
        </Fragment>
    );
}

export default ArticleView;