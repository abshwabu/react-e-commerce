import React from 'react'
import css from './Testimonial.module.css'
import Hero from '../../assets/testimonialHero.png'

function Testimonial() {
    return (
        <div className={css.testimonial}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi dolore eum?</span>

                </div>

                <img src={Hero} alt="" />
                <div className={css.container}>
                    <span>100k+</span>
                    <span>Happy Customer </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial