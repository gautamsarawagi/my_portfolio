import React,{useState,useEffect} from 'react'
import {BsWhatsapp} from "react-icons/bs"
import {InputGroup,FormControl,Form} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../assets/css/howtocontact.css"

function Howtocontact(props) {

  const { updateLeaderboardArray } = props;

  const initialInputState =  {My_Name:"",My_Email:"",message:""} ;
  const [entries,setEntries] = useState(initialInputState)

  const sendMessage = () => {
    toast("Your Message has been sent successfully")
    updateLeaderboardArray(entries)
  }

  return (
    <div className='container row' >
      <div className='col-md-2 offset-md-1 px-5 py-4'>
        <a href="https://wa.me/+919301912689/">
        <BsWhatsapp size={84} className='react_icons'/>
        </a>
      </div>
        <div className='mesagefromme col-md-4 offset-md-1 px-5 py-4'>
            <h4 style={{textDecoration:"underline"}}>TALK ABOUT YOUR PROJECT</h4>
            <h1>
            Feel Free to Get in Touch
            </h1>
            <p style={{marginTop:'5vh'}}>Building the perfect website is hard, and so is finding the right person to help you. 
                If you have any questions please fill up the given form or feel free to get in touch 
                with me on:
            </p>
            <a href="mailto:gautamsarawagi1@gmail.com" className='hover_changes' style={{marginTop:'5vh'}}>gautamsarawagi1@gmail.com</a>
        </div>

        <div className="col-md-4 px-5 py-4">
  <InputGroup className="mb-3" style={{width:'100%'}} required>
    <FormControl
      required
      placeholder="Username"
      aria-label="Username"
      name="My_Name"
      aria-describedby="basic-addon1"
      className='remove_border px-5 py-3'
      onChange={e=>setEntries({...entries, [e.target.name]: e.target.value })}
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl name = "My_Email" required id="basic-url" aria-describedby="basic-addon3" placeholder="Email" className='remove_border px-5 py-3' onChange={e=>setEntries({...entries, [e.target.name]: e.target.value })}/>
  </InputGroup>

  <InputGroup>
    <FormControl name="message" required as="textarea" aria-label="With textarea" placeholder="Message" className='remove_border px-5 py-3' onChange={e=>setEntries({...entries, [e.target.name]: e.target.value })}/>
  </InputGroup>
  <button className='button_style mt-3 px-5 py-2' onClick={() => sendMessage()}> Send Message</button>
    </div>
    <ToastContainer />
    </div>
    
  )
}

export default Howtocontact