import Image from "next/image";
import React, { useEffect } from "react";

import profilePic from "../../public/images/lucas.jpg";
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
          Hey !! My name is Lucas. I&apos;m a developer from Argentina, Mendoza
          province. I have been working on both client end and server side. I am
          very motivated to work in this ever-evolving industry, and I am eager
          to learn and grow as a programmer.
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
