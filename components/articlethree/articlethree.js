import Image from "next/image";
import styles from "./articlethree.module.css";
import profilePic from "../../public/images/wd2.svg";
import Modal from "./modal/modal";
import { useState } from "react";

export default function ArticleThree() {
    const [state, setState] = useState(false)


  return (
    <div  id="portafolio" className={styles.container}>
      <div  className={styles.containerP4}>
        <p> Mis trabajos </p>

        <div  className={styles.divFlex}>
         
         <Modal />
         <Modal />
         <Modal />
         <Modal />
        
        
          

          {/* <img   className='portafolio'  width={"200px"} src= {porta} />
      <img   className='portafolio'  width={"200px"} src= {porta} />
      <img    className='portafolio'  width={"200px"} src= {porta} />
      <img    className= {(first?"null":"portafolioImg") }   width={"200px"} src= {porta} />
   */}
        </div>
      </div>

    

        <div className={styles.part4}>
      <Image 
      src={profilePic} // Route of the image file
      // height={1000} // Desired size with correct aspect ratio
      // width={1000} // Desired size with correct aspect ratio
      alt="Your Name"
   
      />


      </div>
    </div>
  );
}
