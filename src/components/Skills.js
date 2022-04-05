import React from 'react'

import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import bootstrap from "../assets/img/bootstrap.png"
import js from "../assets/img/js.png"
import react_logo from "../assets/img/react.png"
import material_ui from "../assets/img/mui.png"

import "../assets/css/skills.css"

function Skills() {
  return (
    <div className='container'>
        <h4 className='saying_hello' style={{textDecoration:'underline'}}>SKILLS I HAVE</h4>

        <div className='container row py-5'>

        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={html} alt="html"className="img-fluid every_image"/>
        </div>

        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={css} alt="css" className="img-fluid every_image "/>
        </div>
        
        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={bootstrap} alt="bootstrap" className="img-fluid every_image"/>
        </div>
        
        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={js} alt="js" className="img-fluid every_image"/>
        </div>

        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={react_logo} alt="react_logo" className="img-fluid every_image"/>
        </div>

        <div className='col-4 p-4 img_section align-self-center'> 
        <img src={material_ui} alt="mui_logoi" className="img-fluid every_image"/>
        </div>
        </div>
        
    </div>
  )
}

export default Skills