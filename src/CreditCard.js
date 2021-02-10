import React from 'react';

function CreditCard(props) {
    return (
        <div id="creditCards" 
        style={{backgroundColor:props.bgColor,
                color:props.color}}>
        
        
            <div id="cardType">
            <p>{props.type}</p>
            </div>

            <div id="cardNumbers">
            <p>{props.number}</p>
            </div>

            <div id="cardEverythingElse">
            <p>{props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            </div>

            <div><p>{props.owner}</p></div>
        </div>
    );
}

export default CreditCard;