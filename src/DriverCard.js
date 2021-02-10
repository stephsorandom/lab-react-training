import React from 'react';

function DriverCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <p><img src ={props.img} alt=''/> </p>
            <p>(props.car}</p>
        </div>
    );
}

export default DriverCard;