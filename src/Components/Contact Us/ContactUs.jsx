import React from 'react'
import {formik, useFormik } from 'formik'
import style from './ContactUs.module.css'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

 async function submitSending(values){

   let {data}= await axios.post('http://upskilling-egypt.com:3001/contact',values)
  if (data.message==='Email sent successfully') {
    toast.success('Email sent successfully',{
      position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

    })
    
  } 
  
  }  



  

  let PhoneRegex=/^(?:\+20|0)?1\d{9}$/

  let validateSchema=Yup.object({
    name:Yup.string().min(3,'name min length is 3').max(15,'name max length is 15').required('name is required'),
    email:Yup.string().email('email is invalid').required('email is required'),
    phone:Yup.string().required('phone is required').matches(PhoneRegex,'phone is invalid')

  })

  let formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:''
    },validateSchema,
    onSubmit:submitSending
  })

let x=formik.errors.name

console.log(x);

  return (
    <>

    <h2  className={`${style.h2} fw-bold fs-1 my-4`}>Contact Us</h2>

    <div className="container ">
      <div className="row justify-content-evenly">
        <div className=" col-md-3 form">

        <form className='text-center' onSubmit={formik.handleSubmit}>
    
    <input placeholder='name' className={` form-control mb-2 ${style.input}`} type='text' id='name' name='name' value={formik.values.name}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
  {formik.errors.name && formik.touched.name?<div className="alert p-2 mt-2 alert-danger">{formik.errors.name}</div>:''}
 

    <input placeholder='email' className={` form-control mb-2 ${style.input}`} type='email' id='email' name='email' value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
    {formik.errors.email && formik.touched.email?<div className="alert p-2 mt-2 alert-danger">{formik.errors.email}</div>:''}
   
    <input placeholder='phone' className={` form-control mb-2 ${style.input}`} type='tel' id='phone' name='phone' value={formik.values.phone}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
    {formik.errors.phone && formik.touched.phone?<div className="alert p-2 mt-2 alert-danger">{formik.errors.phone}</div>:''}

    <button disabled={!(formik.isValid && formik.dirty)} type='submit' className={style.btn}>Send</button>
    
    </form>
    
        </div>
        
        <div className="col-md-3  m-4">
            <div className="mb-3">
                <i className=" me-2 fa fa-envelope" aria-hidden="true"></i>
                <a href="">upskilling.eg1@gmail.com</a>
    
            </div>
            <div>
                <i className=" me-2 fa-solid fa-phone"></i>
                <a href="">+201154932137</a>
    
            </div>
                
            </div>

        
      </div>
    </div>
    <footer className={style.footer}></footer>
    
    
    
    
    
    
    
    
    
    </>
  )
}
