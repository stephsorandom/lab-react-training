import React from 'react';

//Create a Random component with 2 props:
//min: A number
//max: A number

function Random(props) {
    return(
    <div>
       <div>
           <p>Random value between {props.min} and {props.max} => {Math.floor(Math.random(props.min, props.max)* props.max)} </p>
        </div>

    </div>
    );
}


export default Random;