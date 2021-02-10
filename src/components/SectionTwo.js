import React from 'react';
import Card from './Card';
import './SectionTwo.css';

function SectionTwo(){
    return(
        <div className='section-two'>
            <Card auther='Calton Smith' url='image-colton.jpg' text='We needed the same printed design as the one we had ordered a week prior. Not only did they find original order, but we also received it in time. Excellent!'/>
            <Card auther='Irene Roberts' url='image-colton.jpg' text='Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'/>
            <Card auther='Anne Wallace' url='image-colton.jpg' text='Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'/>
        </div>
        );
}
export default SectionTwo;