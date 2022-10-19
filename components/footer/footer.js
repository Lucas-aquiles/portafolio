import Image from "next/image";
import styles from "./footer.module.css";
import profilePic from "../../public/images/send.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.part1}>
        <h2>Contact me</h2>
        <div className={styles.divFlex}>  
        <Link href="https://www.linkedin.com/in/manuel-lucas-echegaray/">
                <a target="_blank">
             
        <div  className={styles.childrenDiv} >
            <Image
              src={"https://img.icons8.com/fluency/344/linkedin-2.png"}
              alt="html"
              width="50"
              height="50"
            />
            <h4 className={styles.text}>Linkedin</h4>
          </div>
          </a>
              </Link>

              <Link href="https://github.com/Lucas-aquiles">
                <a target="_blank">
              
          <div   className={styles.childrenDiv}>
            <Image
              src={"https://img.icons8.com/ios-filled/344/github.png"}
              alt="html"
              width="50"
              height="50"
            />
            <h4  className={styles.text}>Git Hub</h4>
          </div>
          </a>
              </Link>

              <Link href="https://twitter.com/Manuel_Lu1">
                <a target="_blank">
          <div   className={styles.childrenDiv}>
            <Image
              src={"https://img.icons8.com/color/344/twitter--v1.png"}
              alt="html"
              width="50"
              height="50"
            />
            <h4 className={styles.text} >Twitter</h4>
          </div>
          </a>
              </Link>

          <div   className={styles.childrenDiv}>
            <Image
              src={"https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-curriculum-leadership-justicon-lineal-color-justicon.png"}
              alt="html"
              width="50"
              height="50"
            />
            <h4 className={styles.text} >Curriculum</h4>
          </div>
          </div>
      </div>
      <div   className={styles.childrenDiv}>  
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
