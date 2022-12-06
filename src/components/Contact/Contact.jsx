import React from 'react';
import'./Contact.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';
import Pinterest from '@mui/icons-material/Pinterest';


const Contact = () => {
  return (
    <div className="contact">
     <div className="wrapper">
       <span>BE IN TOUCH WITH US:</span>
       <div className="mail">
         <input type="text" placeholder="Enter your email"/>
         <button>JOIN US</button>
       </div>
     <div className="icons">
        <Facebook/>
        <Instagram/>
        <Twitter/>
        <Google/>
        <Pinterest/>
     </div>
     
     </div>
    </div>
   
  )
}

export default Contact;