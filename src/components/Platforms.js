import React from 'react'

import fiverr from "../assets/img/fiverr2.png"
import upwork from "../assets/img/upwork2.png"
import laptop from "../assets/img/laptop.png"
import freelancer from "../assets/img/freelancer.png"

import "../assets/css/platforms.css"

function Platforms() {
  return (
    <div className='platforms' style={{marginTop:'3vh'}}>
        <div className="platforms_name">

        <h1 className='px-4' style={{color:'white'}}>I am working with different platforms</h1>

        <div className='row' style={{marginTop:'10vh'}}>
          <div className='col-md-4 p-4 logo_img'>
          <a href="https://www.fiverr.com/users/gautamsarawagi">
          <img src={fiverr} alt='fiverr' className='img-fluid img_section'/>
          </a>
          </div>

          <div className='col-md-4 p-4 logo_img'>
          <a href="https://www.upwork.com/freelancers/~01086c6ab298ab7213">
          <img src={upwork} alt='upwork' className='img-fluid img_section'/>
          </a>
          </div>
          
          <div className='col-md-4 p-4 logo_img'>
          <a href="https://www.freelancer.com/u/gautamsarawagi1">
          <img src={freelancer} alt='freelancer' className='img-fluid img_section'/>
          </a>
          </div>
          
          
        </div>


        </div>

        <div className='d-none d-lg-block'>
            <img src={laptop} alt="laptop" className='img-fluid'/>
        </div>


    </div>
  )
}

export default Platforms