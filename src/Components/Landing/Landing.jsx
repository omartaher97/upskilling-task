import React from 'react'
import logo from '../../assets/Trash Hauling.png'
import style from './Landing.module.css'
export default function Landing() {
  return (

    <header className='Hbackground  text-center '>
        <div className={` d-flex  align-items-center ${style.logo}`} >
            <img className='px-4' src={logo} alt="logo"   />
            <div>
            <h1 className={`mainC ${style.logoF}`}>Round Rock</h1>
            <span className={`mainC ${style.logoS}`}>Trush Hauling</span>
            </div>
          
        </div>
        <div className="Hcontent">
            <span className= {` ${style.ex} my-3`}>Experts</span>
            <span className={style.lo1}>Lorem</span>
            <h3 className={style.lo2}>Lorem Lorem</h3>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Architecto veniam aspernatur esse labore! Harum aspernatur repudiandae
ullam laudantium id ad cumque architecto</p>
            <button className={style.btn}>Help Me</button>
        </div>

    </header>

    
  )
}
