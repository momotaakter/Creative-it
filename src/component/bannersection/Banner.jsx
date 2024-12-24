import React from 'react'
import './banner.css'



function Banner() {


 
  return (
 
<div className="banner-container">
<div className="main-banner">
<div className="contentbanner">
 <img  src='/public/Check.png'></img><span style={{color:'black',fontSize:'19px'}}>Unleash Your Potential 
 </span>
  <h1 style={{fontSize:'40px',lineHeight:'5px'}}>Become an IT Pro & Rule the </h1>
  <h1 style={{fontSize:'40px',color:'red'}}>Digital World </h1>
  <div className="paragraph-section">
    <p>
    With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>

    <img style={{width:'20px',height:'20px'}} src='/public/shape-2.png'></img>
  
  </div>

  <div className="btn">
        <button style={{background:'red',fontSize:'19px',textTransform:'capitalize',color:'white',padding:'10px 15px 15px',cursor:'pointer'}}><img src='/public/book.png' style={{paddingTop:'5px'}}></img>&nbsp;  browse course</button>


        <button  style={{background:'red',fontSize:'19px',textTransform:'capitalize',color:'white',padding:'10px 15px 15px',cursor:'pointer',marginLeft:'20px'}}><img src='/public/book.png' style={{paddingTop:'5px'}}></img>&nbsp; join free seminar</button>

</div>

     </div>

<div className="img-banner">
<img style={{width:'600px'}} src='/public/banner1723353386.jpg'></img>

</div>
</div>
</div>

  )
}

export default Banner