import Image from "next/image";
import styles from "./articletwo.module.css";
import profilePic from "../../public/images/waveT.svg";
import profileTeam from "../../public/images/team.svg";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArticleTwo() {
  useEffect(() => {
    AOS.init();
    
  }, [])

  return (
    <div   data-aos="fade-right" data-aos-offset="300"
    data-aos-easing="ease-in-sine">  
    <div className={styles.container3}  >
      <div className={styles.part3}>
        <Image
          src={profilePic} // Route of the image file
          // height={1000} // Desired size with correct aspect ratio
          // width={1000} // Desired size with correct aspect ratio 
          alt="Your Name"
          sizes="100vw"
        />
      </div>
      <div className={styles.text}>
        {/* < img src={team}/> */}
        <div className={styles.imagen}>
          <Image
            src={profileTeam} // Route of the image file
            // height={1000} // Desired size with correct aspect ratio
            // width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
            sizes="100vw"
          />
        </div>
        <div className={styles.stack}>
          <h2> Stack</h2>
          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
              alt="javascript"
              width="50"
              height="50"
            />
            <h4>Javascript</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/888/888859.png"}
              alt="html"
              width="50"
              height="50"
            />
            <h4>Html</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/919/919826.png"}
              alt="css"
              width="50"
              height="50"
            />
            <h4>Css</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
              }
              alt="node"
              width="50"
              height="50"
            />
            <h4>Node</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/3334/3334886.png"}
              alt="react"
              width="50"
              height="50"
            />

            <h4>React js /native</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png"
              }
              alt="Redux"
              width="50"
              height="50"
            />
            <h4>Redux</h4>
            {/* <h4 className={styles.textH4}>Thunk/Toolkit</h4> */}
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/477/477532.png"}
              alt="express"
              width="50"
              height="50"
            />

            <h4>Express</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/5968/5968342.png"}
              alt="postgress"
              width="50"
              height="50"
            />

            <h4>Postgress</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://pics.freeicons.io/uploads/icons/png/6886557471580802969-512.png"
              }
              alt="sequelize"
              width="50"
              height="50"
            />

            <h4>Sequelize</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
              }
              alt="firebase"
              width="50"
              height="50"
            />

            <h4>Firebase</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://pics.freeicons.io/uploads/icons/png/14678610731551953708-512.png"
              }
              alt="typescrit"
              width="50"
              height="50"
            />

            <h4>Typescript</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png"
              }
              alt="next"
              width="50"
              height="50"
            />

            <h4>Next</h4>
          </div>
          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn.icon-icons.com/icons2/2148/PNG/512/expo_icon_132404.png"
              }
              alt="next"
              width="50"
              height="50"
            />

            <h4>Expo </h4>
          </div>

          <div  className={styles.divIcons}>
            <Image
              src={"https://img.icons8.com/color/344/tailwind_css.png"}
              alt="tailwinds"
              width="50"
              height="50"
            />
            <h4>Tailwinds</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png"
              }
              alt="figma"
              width="50"
              height="50"
            />

            <h4>Figma</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png"
              }
              alt="sass"
              width="50"
              height="50"
            />

            <h4>Sass</h4>
          </div>

          <div className={styles.divIcons}>
            <Image
              src={"https://styled-components.com/atom.png"}
              alt="styled-components"
              width="50"
              height="50"
            />
            <h4>Styled Components</h4>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
