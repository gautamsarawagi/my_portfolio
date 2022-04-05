import React from 'react'

import "../assets/css/work.css"
import bastar from "../assets/img/bastar.png"
import mahavir from "../assets/img/mahavir.png"

import {AiOutlineLink} from "react-icons/ai"

function work() {
  return (
    <div className='container' style={{marginTop:'1vh'}}>
        <h4 className='saying_hello' style={{textDecoration:'underline'}}>WORK SHOWCASE</h4>
        <h3 className='subHead col-md-6'>A selection of work I have done</h3>
        <div className='works'>
            {/* travel bastar */}
            <div>
            <h4 style={{textDecoration:'underline',marginTop:'2vh'}}>1. Travel Bastar</h4>
            <div className='row image_roles'>
                <div className='col-md-4 py-2 align-self-center img_section'>
                <img src={bastar} alt="bastar_logo"/>
                </div>
                
                <div className='px-2 py-2 col-md-2 align-self-center offset-md-1'>
                <h1 className='logo_positioning'>
                    <a href="https://travelbastar.com/">
                    <AiOutlineLink className='icons d-flex justify-content-center'/>
                    </a>
                    </h1>
                <p style={{color:'#14c0a1'}}>Click here to visit</p>
                    </div>
            <div className='px-2 py-2 col-md-4 align-self-center'>
                <h4 style={{textDecoration:'underline'}}>Roles and responsibilities</h4>
            <ul>
            <li>Integrated Rest API’s using axios and fetch to make the application dynamic</li>
            <li>Integrate Razorpay Payment gateway where online transactions can be done between user and admin.</li>
            <li>QR Code generates when users can buy any services or book tickets.</li>       
            </ul>
            </div>
            </div>
            </div>

            {/* mahavir project */}
            <div className='works'>
            <h4 style={{textDecoration:'underline',marginTop:'2vh'}}>2. Mahavir Ashok Jwellers</h4>
            <div className='row image_roles'>
                <div className='col-md-4 py-2 align-self-center img_section'>
                <img src={mahavir} alt="mahavir-logo" width="300vw" height="180vh"/>   
                </div>
                
                <div className='px-2 py-2 col-md-2 align-self-center offset-md-1'>
                    <h1 className='logo_positioning'>
                    <a href="https://www.infinitybyma.com/">
                    <AiOutlineLink className='icons d-flex justify-content-center'/>
                    </a>
                    </h1>
                <p style={{color:'#14c0a1'}}>Click here to visit</p>
                </div>

            <div className='px-2 py-2 col-md-4 align-self-center'>
                <h4 style={{textDecoration:'underline'}}>Roles and responsibilities</h4>
            <ul>
            <li>Make the Admin panel from scratch.</li>
            <li>Developed pixel perfect website screens as per UI/UX design provided.</li>
            <li>Updated the design as per client requirements.</li>     
            <p style={{marginTop:'2vh'}}>( * I mostly did the designing part in this project )</p>  
            </ul>
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default work