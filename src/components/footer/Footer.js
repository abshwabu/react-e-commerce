import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {ImboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UserIcon,LinkIcon} from '@heroicons/react/outline'

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>E-commerce</span>
            </div>
        </div>
    </div>
  )
}

export default Footer