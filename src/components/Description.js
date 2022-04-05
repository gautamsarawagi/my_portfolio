import React from 'react'
import "../assets/css/description.css"
import my_photo from "../assets/img/profile.png"
function Description() { 
  return (
      <div className='container row description_design' >
        <div className='p-4 col-md-6 offset-md-2'>
        <h4 className='saying_hello' style={{textDecoration:'underline'}}>HELLO EVERYONE !</h4>

       <h4 className='basic_short_info '>I am <span style={{color:'#14c0a1'}}>Gautam Sarawagi</span></h4> 
        <h6 className='basic_short_info_second'>Front-end Developer, IIIT Naya Raipur , 2025</h6>

        <div className='social_accounts'>
            <h6 className='p-1'><a href="https://twitter.com/gautamsarawagi_"><span className='specific_social_accounts'>Twitter</span></a>  - </h6>
                <h6 className='p-1'><a href="https://github.com/gautamsarawagi"><span className='specific_social_accounts'>Github</span></a>   - </h6>
                  <h6 className='p-1'><a href="https://www.linkedin.com/in/gautam-sarawagi-64b1b4227"><span className='specific_social_accounts'> Linkedin </span></a></h6>
        </div>
      </div>
      <div className='p-4 col-md-4'>
        <img src={my_photo} alt='my photo'  className="img-fluid my_photo"/>
      </div>
      </div>
  )
}

export default Description