import React, { Fragment } from "react";

import Rating from "../ratingComponent/rating.component";

const Ratinglist = props => {
    const output = props.dataArr.map( data => <Rating Source={ data.Source } Value={ data.Value } key={ (Math.random()*100).toFixed(0) } /> );

    return (
        <Fragment>
            { output }
        </Fragment>
    );
};

export default Ratinglist;