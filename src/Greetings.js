import React from 'react';

function translate(lang) {
    if(lang === 'de') {
        return 'Hallo';
    } else if (lang === 'fr') {
        return 'Bonjour';
    } else {
        return 'hello';
    }

}

function Greetings (props) {
    return (
        <div>
        {translate(props.lang)} {props.name};
        </div>
    );
}

export default Greetings;

