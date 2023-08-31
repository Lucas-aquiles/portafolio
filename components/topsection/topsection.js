import Image from "next/image";
import styles from "./topsection.module.css";
import profilePic from "../../public/images/20.svg";
import arrow from "../../public/images/icons8-arrow-100.png";

export default function Topsection() {
  return (
    <div id="home" className={styles.container}>
      {/* <h1 className={styles.text}>Programming is the paradise of the curious</h1> */}
      <div className={styles.imageWrapper}>
        <Image
          src={profilePic} // Route of the image file
          // height={1000} // Desired size with correct aspect ratio
          // width={1000} // Desired size with correct aspect ratio
          layout="fill"
          objectFit="contain"
          alt="Your Name"
        />
      </div>
      {/* <div className={styles.divClon}>   
      <div className={styles.smokeContainer}>
        <div className={styles.smoke1}>
          <Image
            src={smoke} // Route of the image file
            // height={1000} // Desired size with correct aspect ratio
            // width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        <div className={styles.smoke2}>
          <Image
            src={smoke} // Route of the image file
            // height={1000} // Desired size with correct aspect ratio
            // width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </div>
      </div> */}
      <div  className={styles.divArrow} >
            <Image
              src={arrow}
              alt="html"
              width="50"
              height="50"
            />
          </div>
    </div>
  );
}
