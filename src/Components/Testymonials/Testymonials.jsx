import React from "react";
import profile from "../../assets/Ellipse 1.png";
import style from "./Testymonials.module.css";

export default function Testymonials() {
  return (
    <section>
        <div className="container ">
        <h2 className={`${style.h2} fw-bold fs-1 my-4`}>Testymonials</h2>
      <div className="row g-3">
        <div className={ `col-md-5 mb-3  mx-auto  ${style.item} `}>
          <div className="d-flex">
          <div>
            <img className="me-3" src={profile} alt="profile_Picture" />
          </div>
          <div>
            <h3 className={style.blue}>Courteny Henry</h3>
            <p className={`w-75 ${style.blue}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
            </div>
          </div>
          </div>
          
        </div>
        <div className={ `col-md-5 mb-3  mx-auto ${style.item} `}>
          <div className="d-flex">
          <div>
            <img className="me-3" src={profile} alt="profile_Picture" />
          </div>
          <div>
            <h3 className={style.blue}>Courteny Henry</h3>
            <p className={`w-75 ${style.blue}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
            </div>
          </div>
          </div>
          
        </div>
        <div className={ `col-md-5 mb-3 mx-auto  ${style.item} `}>
          <div className="d-flex">
          <div>
            <img className="me-3" src={profile} alt="profile_Picture" />
          </div>
          <div>
            <h3 className={style.blue}>Courteny Henry</h3>
            <p className={`w-75 ${style.blue}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
            </div>
          </div>
          </div>
          
        </div>
        <div className={ `col-md-5 mb-3 mx-auto  ${style.item} `}>
          <div className="d-flex">
          <div>
            <img className="me-3" src={profile} alt="profile_Picture" />
          </div>
          <div>
            <h3 className={style.blue}>Courteny Henry</h3>
            <p className={`w-75 ${style.blue}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
              <i className={`fa-solid fa-star ${style.blue}`}></i>
            </div>
          </div>
          </div>
          
        </div>
       
        </div>
      </div>

       
      
    </section>
  );
}
