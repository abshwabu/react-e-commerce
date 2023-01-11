import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UserIcon,LinkIcon} from '@heroicons/react/outline'

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
                <span className={css.pngLine}>
                  <PhoneIcon className={css.icon}/>
                  <span>+1234567890</span>
                </span>
                <span className={css.pngLine}>
                  <InboxIcon className={css.icon}/>
                  <span>16386</span>
                </span>
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                  <LoginIcon className={css.icon}/>
                  <span>Login</span>
                </span>
                
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                  <UserIcon className={css.icon}/>
                  <span>About Us</span>
                </span>
               
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                  <LinkIcon className={css.icon}/>
                  <span>Term & Policy</span>
                </span>
               
              </div>
            </div>
            
        </div>
        <div className={css.copyRight}>
          <span>Copyright &copy;2023 by E-commerce, Inc </span>
          <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer