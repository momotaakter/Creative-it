import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar() {
  return (
    <>
    <div className="allContainer">
    <div className="maincontainer">
      <div className="logoContainer">
        <img src='/logo1718088965.png'></img>
    
        </div>
      
    <div className='navbarContainer'>
        <ul>
        <Link style={{textDecoration:'none',color:'black'}} to={'/home'}>Home</Link>
        <Link style={{textDecoration:'none',color:'black'}} to={'/about'}>About us</Link>
         <Link style={{textDecoration:'none',color:'black'}} to={'/success'}>Success story</Link>
         <Link style={{textDecoration:'none',color:'black'}} to={'./freelancing'}>Freelancing</Link>
         <Link style={{textDecoration:'none',color:'black'}} to={'./contact'}>Contact</Link>
         <Link style={{textDecoration:'none',color:'white',background:'red',textAlign:'center',borderRadius:'10px'}} to={'./course'}> 
         
         <div className="link-div">
     
         <p style={{lineHeight:'0px;',padding:'0px 5px'}}>Browse Course</p>
       
       </div>
         </Link>



        </ul>
     
    </div>
      
      </div>
      
      
      
      
      
      
      
      </div>

    
    
    </>

  )
}

export default Navbar