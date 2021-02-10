import React from 'react';
import './Card.css';

function Card(props){
    return(
        <div className='card'>
            <img src={`images/${props.url}`} alt='auth'/>
            <div className='auth'>
                <h4>{props.auther}</h4>
                <b>Verified Buyer</b>
            </div>
            <p>&#8220; {props.text} &#8221;</p>
        </div>
        );
}
export default Card;