import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'

function Header() {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="logo" />
            <span>E-commerce</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
              <ul className={css.menu}>
                <li>Collection</li>
                <li>Brands</li>
                <li>New</li>
                <li>Sales</li>
                <li>Eng</li>
              </ul>
            </div>
            <input type="text" className={css.search} placeholder="Search" />

           <CgShoppingBag className={css.cart}/>

        </div>
    </div>
  )
}

export default Header