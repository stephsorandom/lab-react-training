//import React first
import React from 'react';


//write function. add argument. add a return. add a div and inside use 'p' tag to add objects. 
function IdCard(props) {
    return (
        <div class="idcard">
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toString()}</p>
            <img src = 
        </div>
        
    );
}

//export the file once done, to link in main file
export default IdCard;