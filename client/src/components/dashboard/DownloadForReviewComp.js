import React, { Fragment, useState, useEffect } from "react";

const DonwloadForReview = ({article}) => {
    
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(`/app/downArt/${article.filepath}`);
        console.log(path);
    }, []);

    return(
        <Fragment>

            <a href={path} className="button primary_blue" target="_blank">Preview</a>
        </Fragment>
    );
}

export default DonwloadForReview;