import Image from "next/image";
import styles from "./articlethree.module.css";
import profilePic from "../../public/images/waveP.svg";
import Modal from "./modal/modal";
import { useState } from "react";
import screenOne from "../../public/images/app_countries.png";
import screenTwo from "../../public/images/shoesApp.png";
import screenThree from "../../public/images/donationApp.png";
import screenFour from "../../public/images/cakeApp.png";

//https://donation-app-one.vercel.app/
//https://github.com/Lucas-aquiles/Donation-App

//https://countries-app-lime.vercel.app/
//https://github.com/Lucas-aquiles/Proyect_App_Countries

//https://tortas-artesanales.vercel.app/
//https://github.com/Lucas-aquiles/Cakes

//https://client-henryshoes.vercel.app/
//https://github.com/fedesiri/HenryShoesPF

export default function ArticleThree() {
  const [state, setState] = useState(false);

  const data = [
    {
      git: "https://github.com/Lucas-aquiles/Proyect_App_Countries",
      deploy: "https://countries-app-lime.vercel.app/",
      title: "Countries App ",
      description: "Individual App. Rest Api",
      addres: screenOne,
    },
    {
      git: "https://github.com/fedesiri/HenryShoesPF",
      deploy: "https://client-henryshoes.vercel.app/",
      title: "Eccomerce Shoes",
      description: "Final group project. Rest Api",
      addres: screenTwo,
    },

    {
      git: "https://github.com/Lucas-aquiles/Donation-App",
      deploy: "https://donation-app-one.vercel.app/",
      title: "App Donations",
      description: "Practice firebase crud-api-rest",
      addres: screenThree,
    },
    {
      git: "https://github.com/Lucas-aquiles/demo-cakes-client",
      deploy: "https://tortas-artesanales.vercel.app/",
      title: "Cakes App ",
      description: "Develop view-practice. Front end design",
      addres: screenFour,
    },
  ];

  return (
    <div id="portafolio" className={styles.container}>
      <div className={styles.containerP4}>
        <h2 className={styles.textTitle}> My Projects </h2>

        <div className={styles.divFlex}>
          {data &&
            data.map((e) => (
              <Modal
                key={e.git}
                git={e.git}
                deploy={e.deploy}
                title={e.title}
                description={e.description}
                addres={e.addres}
              />
            ))}

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
