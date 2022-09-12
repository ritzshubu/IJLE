import React, { Fragment, useState, useEffect } from "react";

const DonwloadFinal = ({article}) => {
    
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(`/app/downArtFin/${article.filepath}`);
        console.log(path);
    },);

    return(
        <Fragment>
            <a href={path} className="button primary_blue" target="_blank" rel="noreferrer">Download</a>
        </Fragment>
    );
}

export default DonwloadFinal;