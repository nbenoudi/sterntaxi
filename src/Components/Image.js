import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

import ButtonMailto from "../Components/ButtonMailto" 
import imagehaki from "../images/haki.jpg";
import "../outputindex.css";
import image1  from '../images/1.jpg';
import image2  from '../images/2.jpg';
import image3  from '../images/3.jpg';
import image7  from '../images/7.jpg';
import "../App.css"
import { Component } from "react";
class Image extends Component{
  
render(){
    return(
 
    <div className="App-body">
        <figure className="md:flex bg-transparent rounded-s p-3 md:p-0 text-size-adjust:auto">
        <img  id="image" className="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto border-4 border-double" src={imagehaki} alt="" width="50%" height="50%" />
          
      <div className="pt-4 md:p-6 text-center md:text-center space-y-2">
 <p style={{color:"rgb(255, 255, 0)"} } className="text-underline text-size-adjust:auto"> Stern-Taxi Salzgitter</p>
        <figcaption className="font-medium text-yellow-300">
          
           Hern Haki und  Bellikli  
          
         <p style={{display: "flex", justifyContent: "center"}} className="text-yellow-darkkhaki text-center md:text-center space-y-2">
                      <MdAlternateEmail size={30}/>
                    

<ButtonMailto label="Meine E-mail To :" mailto="https://mail.google.com/mail/u/?authuser=user@gmail.com" /> 

<ButtonMailto label="&nbsp;sterntaxi.salzgitter@gmail.com" mailto="mailto:sterntaxi.salzgitter@gmail.com" /> 

         </p>
          <div style={{  display: "flex",  justifyContent:"center",  alignItems: "center" }}>
         < BsFillTelephoneFill size={30} style={{display: "flex", justifyContent: "center"}} className="text-yellow-darkkhaki md:text-center space-y-2" /> <span>&nbsp; 05341 - 9050800</span>  
        </div>
             <div style={{  display: "flex",  justifyContent:"center",  alignItems: "center" }}>
         < FaSquareWhatsapp size={30} style={{display: "flex", justifyContent: "center"}} className="text-yellow-darkkhaki md:text-center space-y-2" />
         <a href="https://wa.me/?text=Stern-Taxi-Salzgitter, Guten Tag, Wie kann Ihnen behilflich sein ?" target="_blank" rel="noreferrer">   
         <span>&nbsp; 0171 - 9955591</span> </a>
        </div>
           
        </figcaption>
      </div>
    </figure>
               
     
     <div className="grid grid-cols-3 gap-x-8 gap-y-4"  >  
    <img class="aspect-3/2" src={image1} width="100%" />  
    <img className="aspect-square opacity:0.8" src={image2} width="100%" />  
    <img className="aspect-square" src={image3} width="100%" /> 
    <img className="aspect-square" src={image7} width="100%" /> 
 
    <div className="App-image">
    </div>
    </div>
    </div>)
}
}

export default Image;