import Image from "next/image";
import styles from "./articlethree.module.css";
import profilePic from "../../public/images/waveP.svg";
import heartPic from "../../public/images/heart.svg";
import Modal from "./modal/modal";
import { useState } from "react";
import screenOne from "../../public/images/app_countries.png";
import screenTwo from "../../public/images/shoesApp.png";
import screenThree from "../../public/images/donationApp.png";
import screenFour from "../../public/images/cakeApp.png";
import screenFive from "../../public/images/expocli.png";
import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

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

  // useEffect(() => {
  //   AOS.init({delay: 500, duration:600});
  // }, [])

  const data = [
    {
      git: "https://github.com/Lucas-aquiles/Proyect_App_Countries",
      deploy: "https://countries-app-lucas-aquiles.vercel.app",
      title: "Countries App ",
      description:
        "Aplicacion web que permite buscar países y sus actividades. Se desarrollo el cliente con React, y se manejaron los estados con Redux. El servidor fue diseñado con Express, el ORM utilizado  es Sequelize y por ultimo la base de dato es Postgressql. ",
      addres: screenOne,
    },
    // {
    //   git: "https://github.com/fedesiri/HenryShoesPF",
    //   deploy: "https://client-henryshoes.vercel.app/",
    //   title: "Eccomerce Shoes",
    //   description: "Aplicación web eccomerce, que permite mostrar y comprar los productos con Paypal. Me encargue de los componetes funcionales de Front End con React y Redux , Redux Persist. Desarrolle algunas rutas y sus controllers en el Back ",
    //   addres: screenTwo,
    // },

    {
      git: "https://github.com/Lucas-aquiles/Donation-App",
      deploy: "https://donation-app-one.vercel.app/",
      title: "App Donations",
      description:
        "Aplicacion Web que permite mostrar a los usuarios las ONG. El cliente se desarrolla en React js y  los estilos con: Styled-Component. Y la Api se desarrolla con Firebase, que permite tanto Autenticar a los usuarios en persona o ONG; y guardar en su base de datos NoSQL la información",
      addres: screenThree,
    },
    {
      git: "https://github.com/Lucas-aquiles/demo-cakes-client",
      deploy: "https://tortas-artesanales.vercel.app/",
      title: "Cakes App ",
      description:
        "Aplicacion Web de una pasteleria, desarrollo de práctica Front End, utilizando  Tailwind y React js",
      addres: screenFour,
    },
    {
      git: "https://github.com/Lucas-aquiles/Recetario",
      deploy: "https://github.com/Lucas-aquiles/Recetario",
      title: "Recetas",
      description: "  Aplicacion Mobile, que permite guardar recetas y mostrar en su detalle. Se desarrollo con React Native , Expo cli. Deploy en archivo apk ",
      addres: screenFive,
    },
  ];

  return (
    <div id="portafolio" className={styles.container}>
      <div className={styles.containerP4}>
        <div className={styles.divFlextwo}>
          <h2 className={styles.textTitle}> Mis Proyectos </h2>
          <div className={styles.heartimg}>
            <Image
              src={heartPic} // Route of the image file
              // height={1000} // Desired size with correct aspect ratio
              // width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>
        </div>

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
          sizes="100vw"

        />
      </div>
    </div>
  );
}
