import React from 'react';
import './Card.css';

function Card(){
    return(
        <div className='card'>
            <img src='images/image-colton.jpg' alt='auth'/>
            <div className='auth'>
                <h4>Calton Smith</h4>
                <b>Verified Buyer</b>
            </div>
            <p>&#8220;We needed the same printed design as the one we had ordered a week prior. Not only did they find original order, but we also received it in time. Excellent! &#8221;</p>
        </div>
        );
}
export default Card;