import Link from "next/link";
import Image from "next/image";
import profilePic1 from "/public/assets/img1.jpg";
import profilePic2 from "/public/assets/img2.jpg";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.divFlex}> 
      <a
        href="/assets/lucas.pdf"
        download="Lucas_Echegaray_CurriculumDevelopment.pdf"
      >
        <button className={styles.buttonCustom}>Download Curriculum Vitae</button>
      </a>

      <Link href="/">
        <a>
            <h4 className={styles.text}>Back</h4>
        </a>
      </Link>
      </div>
      <div>
      <Image src={profilePic1} alt="html" width="1000" height="1000" />
      <Image src={profilePic2} alt="html" width="1000" height="1000" />
      </div>
    </div>
  );
}
