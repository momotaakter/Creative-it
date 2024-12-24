import React from 'react'
import './translate.css'


function Translate() {
  return (
    <div className="translatecontainer">
        <div className="translateContent">
           <div className="phon-container">
            <img src='/call.png'></img>
            <span>01777308777</span>
      
            <img src='/top-mail.png'></img>
            <span>help@creativeitinstitute.com</span>
            </div> 
            <div className="btn-Container">
           <button className='Translatebtn'>BN EN</button>
           </div>  
        </div>
    </div>
  )
}

export default Translate