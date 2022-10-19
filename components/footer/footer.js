import Image from "next/image";
import styles from "./footer.module.css";
import profilePic from "../../public/images/send.svg";

export default function Footer() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.part1}>
        <h2>Contact me</h2>
      </div>
      <div >  
      <Image
        src={profilePic} // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      </div>
    </div>
  );
}
