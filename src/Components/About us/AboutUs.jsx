import React from "react";
import style from "./AboutUs.module.css";
import waste from "../../assets/Rectangle 263.png";

export default function AboutUs() {
  return (
    <section className={` ${style.bg1} my-4 `}>
      <div className={`container-fluid  row justify-content-around align-items-center  ${style.bg2}`}>
        <div className={`  col-md-6 d-flex flex-column align-items-start  vh-100 ps-4 pt-4 mt-4 ${style.about}`}>
          <h2 className="mx-auto fw-bold fs-1">About Us</h2>
          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ex alias, magnam eius cumque fugit,
          </p>
          <img className="w-50 mx-auto" src={waste} alt="waste" />
        </div>

        <div className=" col-md-6 d-flex flex-column align-items-end mt-5">
          <h3 className="me-4 pe-2 fw-bold fs-1">Where</h3>
          <p className="w-75 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book . It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className={`me-auto mt-50 ${style.btn}`}>Help Me</button>
        </div>
      </div>
    
    </section>
  );
}
