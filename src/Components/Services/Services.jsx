import React from "react";
import style from "./services.module.css";
import item1 from "../../assets/Rectangle 250(2).png";
import item2 from "../../assets/Rectangle 250.png";
import item3 from "../../assets/Rectangle 250 (1).png";
export default function Services() {
  return (
    <section className={` ${style.services} my-4 `}>
        <div className="container">
        <h2 className={`${style.h2} fw-bold fs-1 my-4`}>Sevices</h2>
      <div className={`row justify-content-around align-items-center `}>
        <div className={`col-md-4  ${style.item}`}>
          <img className="w-100" src={item1} alt="recycling" />
          <div className="bg-white">
            <h3>Lorem, ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          </div>
          
        </div>
        <div className="col-md-4">
          <img className="w-100" src={item2} alt="recycling" />
          <div className="bg-white">
          <h3>Lorem, ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          </div>
        
        </div>
        <div className="col-md-4">
          <img className="w-100" src={item3} alt="recycling" />
          <div className="bg-white">
          <h3>Lorem, ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          </div>
        
        </div>
      </div>

        </div>
      
    </section>
  );
}
