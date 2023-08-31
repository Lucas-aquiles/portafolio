import Image from "next/image";
import React, { useEffect } from "react";

import profilePic from "../../public/images/lucas.png";
import styles from "./articleone.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticleOne() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={styles.container2}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className={styles.imgPersonal}>
        <Image
          src={profilePic} // Route of the image file
          className={styles.borderCircle}
          height={200}
          width={200}
          alt="Your Name"
        />
      </div>
      <div className={styles.childText}>
        <p>
        ¡Hola! Mi nombre es Lucas. Soy un desarrollador de Argentina,
          provincia de Mendoza. Tengo experiencia en Front End  y Back End . Tengo muchas ganas 
          aprender y trabajar  en esta industria IT, y estoy ansioso
          de crecer como programador.
        </p>
        <div>
          {/* <img   className='icon'  src= { require('../imag/instagram.svg').default }  />
  <img src= { require('../imag/linkedin-original.svg').default }  />
  <img src= { require('../imag/twitter.svg').default }  /> */}
        </div>
      </div>
    </div>
  );
}
