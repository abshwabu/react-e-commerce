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
            <div className={css.block}>
              <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                  <LocationMarkerIcon className={css.icon}/>
                  <span>111 north avenue Orlando, FL 32001</span>
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer