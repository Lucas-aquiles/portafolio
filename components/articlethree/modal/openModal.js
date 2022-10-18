import Image from "next/image";
import styles from "./openModal.module.css";
import profilePic from "../../../public/images/porta1.svg";
import { useState } from "react";

export default function OpenModal({state,setState}) {


function closedModal(e){
  e.stopPropagation()
  setState(!state)
}
function stop (e){
  e.stopPropagation()

}

  return (
    <div className={ state?styles.containerOpenModal:"null"} onClick={closedModal}>
        <div className={state?styles.modal:"null"} onClick={stop}>  
        <div className={state?styles.portafolioImg:styles.hidden}>
            
            
            
        
        <Image
                  src={profilePic} // Route of the image file
                  // height={1000} // Desired size with correct aspect ratio
                  // width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  width={400}
                  height={300}
                />


</div>
</div>
    </div>
  )
}
