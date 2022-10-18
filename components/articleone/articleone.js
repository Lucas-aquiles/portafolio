import Image from "next/image";
import profilePic from "../../public/images/lucas.jpg";
import styles from "./articleone.module.css";

export default function ArticleOne() {
  return (
    <div className={styles.container2}>
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
          Hey !! My name is Lucas. I'm a developer from Argentina, Mendoza
          province. I have been working on both client end and server side. I am
          interested in creative development , accessible to the user . And also
          in a design , code structure that allows scalability , readability. I
          have the desire to do things that impact people's lives , improving it
          , helping , etc..
        </p>
        <div className={styles.redes}>
          {/* <img   className='icon'  src= { require('../imag/instagram.svg').default }  />
  <img src= { require('../imag/linkedin-original.svg').default }  />
  <img src= { require('../imag/twitter.svg').default }  /> */}
        </div>
      </div>
    </div>
  );
}
