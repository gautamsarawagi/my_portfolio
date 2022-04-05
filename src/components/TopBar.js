import React, { useRef } from 'react'
import "../assets/css/TopBar.css"
import {Link} from 'react-scroll'

function TopBar() {

  return (
    <div className='container'>
          <div className ="contents">
      <p className='contents_text'>Available for customer work</p>
      <Link  to="Howtocontact" spy={true} smooth={true}>
        <button className='button_styling py-2'>
        HIRE ME
        </button>
        </Link>
    </div>
    </div>

  )
}

export default TopBar

// import React from 'react'

// function TopBar() {
//   return (
//     <div className='container'>
//       <div className='row'>
//       <p className='col-md-4 offset-md-'>Available for customer work</p>
//     <button className='col-md-2 py-2'>HIRE ME</button>
//       </div>

//     </div>
//   )
// }

// export default TopBar