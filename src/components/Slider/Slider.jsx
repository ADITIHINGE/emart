import React,{useState} from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ImageSlider, { Slide } from "react-auto-image-slider";
import './Slider.scss'

const Slider = () => {

   const [currentSlide, setCurrentSlide] =useState(0)
   

    const data =[
        "https://i.ibb.co/cDLBk5h/bg-1.jpg",
        
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
           // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https://i.ibb.co/H2FRmtV/bg-3.jpg",
          "https://i.ibb.co/CBGRLhG/bg-4.jpg",
        
        
        
        // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      
          
    ];
    // const slideLength = data.length;

    const prevSlide= () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev- 1);
    }

    const nextSlide= () => {
        setCurrentSlide(currentSlide === 2? 0 : (prev) => prev + 1);
    }




  return (
    <div className="slider">
     <div className="container" >
      
       {/* <img src={data[0]} alt="img1"/>
       <img src={data[1]} alt="img2"/>
       <img src={data[2]} alt="img3"/> */}
       <ImageSlider effectDelay={500} autoPlayDelay={2000} onClick={prevSlide}>
      <Slide onClick={nextSlide}>
      <img src={data[0]} alt="img1"/>
      </Slide>
      <Slide>
      <img src={data[1]} alt="img2"/>
      </Slide>
      
      <Slide>
      <img src={data[2]} alt="img3"/>
      </Slide>
    </ImageSlider>
      
        </div> 
    <div className="icons">
        <div className="icon" onClick={prevSlide}><WestIcon/></div>
        <div className="icon" onClick={nextSlide}><EastIcon/></div>   
        </div>  
    </div>
  )
}

export default Slider



// import { useEffect, useState,React} from "react";
// // import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "./Slider-data.js";
// import "./Slider.scss";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = sliderData.length;
//   //   console.log(slideLength);

//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 5000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   //   const auto = () => {
//   //     slideInterval = setInterval(nextSlide, intervalTime);
//   //   };

//   useEffect(() => {
//     if (autoScroll) {
//       const auto = () => {
//         slideInterval = setInterval(nextSlide, intervalTime);
//       };
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide, slideInterval, autoScroll]);

//   return (
//     <div className="slider">
//       {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
//       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}

//       {sliderData.map((slide, index) => {
//         const { image, heading, desc } = slide;
//         return (
//           <div
//             key={index}
//             className={index === currentSlide ? "slide current" : "slide"}
//           >
//             {index === currentSlide && (
//               <>
//                 <img src={image} alt="slide" />
//                 <div className="content">
//                   <h2>{heading}</h2>
//                   <p>{desc}</p>
//                   <hr />
//                   <a href="#product" className="--btn --btn-primary">
//                     Shop Now
//                   </a>
//                 </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Slider;
