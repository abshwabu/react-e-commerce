import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react'

function Header() {
  const [showMenu,setShowMenu] =useState(true)
  const toggleMenu =()=>{
    setShowMenu((showMenu)=>!showMenu)
  }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="logo" />
            <span>E-commerce</span>
        </div>
        <div className={css.right}>
          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars/>
          </div>
            
              <ul className={css.menu} style={{display: showMenu?'inherit':'none'}}>
                <li>Collection</li>
                <li>Brands</li>
                <li>New</li>
                <li>Sales</li>
                <li>Eng</li>
              </ul>
            
            <input type="text" className={css.search} placeholder="Search" />

           <CgShoppingBag className={css.cart}/>

        </div>
    </div>
  )
}

export default Header