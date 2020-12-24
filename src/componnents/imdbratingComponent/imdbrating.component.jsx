import React, { memo } from 'react';

import classes from "./imdbrating.style.module.scss";

const Imdbrating = ({ rating }) => {
    return (
        <div className={ classes.imdbrating }>
            <p className={ classes.star } >&#9733;</p> { rating } 
        </div>
    )
}


export default memo(Imdbrating);