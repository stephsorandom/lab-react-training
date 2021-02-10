import React from 'react';


// Create a BoxColor component that displays a rectangle with a background color based on props. For this, you will need a inline style (documentation).

// It takes 3 props:

// r: A number between 0 and 255 representing the amount of red
// g: A number between 0 and 255 representing the amount of green
// b: A number between 0 and 255 representing the amount of blue


function BoxColor(props) {
    return (
        <div>
            <div className="boxColors">
           <p>rgb {props.r} {props.g} {props.b}</p>  
            </div>
        </div>
    );
}

export default BoxColor;

// Class Component                     Function Component
// state                                    Hooks 
                                            //useState