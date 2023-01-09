import React from 'react'
import css from './Hero.module.css'
import Heropng from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

function Hero() {
    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={css.text1}>Skin Protection Cream</span>
                <div className={css.text2}>
                    <span>Trendy products</span>
                <span>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quaerat architecto veniam.
                </span>
                </div>
            </div>
            <div className={css.wrapper}>
                <div className={css.blue_circle}></div>
                <img src={Heropng} alt="hero img" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Signup Offers</span>
                        <BsArrowRight/>
                    </div>
                    

                </div>

            </div>
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>More than </span>
                    <span> 1.5M </span>
                    <span> Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>More than</span>
                    <span>100K</span>
                    <span>Posetive review</span>
                </div>
            </div>

        </div>
    )
}

export default Hero