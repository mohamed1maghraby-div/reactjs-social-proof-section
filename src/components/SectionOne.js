import React from 'react';
import Rate from './Rate';
import './SectionOne.css';

function SectionOne(){
    return(
        <>
        <section className='section-one'>
            <div className='part-1'>
                <h1>10,000+ of our users love our products.</h1>
                <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
            </div>
            <div className='part-2'>
                <Rate text='Rated 5 Stars in Reviews'/>
                <Rate text='Rated 5 Stars in Report'/>
                <Rate text='Rated 5 Stars in BestTech'/>
            </div>
        </section>
        </>
        );
}
export default SectionOne;