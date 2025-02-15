import React from 'react'
import SectionFooter from '../../../components/user/footerSection/SectionFooter.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import style from './about.module.css';
import AboutComponent from '../../../components/aboutComponent/AboutComponent.jsx';

export default function About() {
  return (
    <div>
      <div className={` d-flex flex-column ${style.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText1}>About Us</h2>
      </div>
      <AboutComponent />
      <SectionFooter />
    </div>
  )
}
