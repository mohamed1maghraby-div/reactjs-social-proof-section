import React from 'react';
import './Rate.css';

function Rate(props){
    return(
        <div className='rate'>
            <img src='images/icon-star.svg' alt='star'/>
            <img src='images/icon-star.svg' alt='star'/>
            <img src='images/icon-star.svg' alt='star'/>
            <img src='images/icon-star.svg' alt='star'/>
            <img src='images/icon-star.svg' alt='star'/>
            <span>{props.text}</span>
        </div>
        );
}
export default Rate;