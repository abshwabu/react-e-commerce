import React from 'react'
import css from './Hero.module.css'
import Heropng from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Hero() {
    const transition = {duration:3,type:'spring'}
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
                <motion.div
                initial={{bottom:'2rem'}}
                whileInView={{bottom:'0'}} 
                transition={transition}
                 className={css.blue_circle}></motion.div>
            <motion.img
             transition={transition}
             initial={{bottom:'-2rem'}}
             whileInView={{bottom:'0'}}
             src={Heropng} alt="hero ping" width={600} />
            <motion.div
             transition={transition}
             initial={{right:'10px'}}
             whileInView={{right: '0.1px'}}
             className={css.cart2}>
                <RiShoppingBagFill />
                <div className={css.signup}>
                    <span>Signup Offers</span>
                    <BsArrowRight />
                </div>


            </motion.div>

        </div><div className={css.h_sides}>
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