//rfc
import { useState } from "react";
import styles from "./navbar.module.css";
// import { Link} from 'react-scroll'

import { Link } from "react-scroll/modules";

export default function Navbar() {
  const [first, setFirst] = useState(false);

  function myFunction() {
    // menu.classList.toggle("change-menu");
    // x.classList.toggle("change");
    setFirst(!first);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerMenu}>
        <div
          className={
            first?( `${styles.menu} ${styles.change}`):styles.menu
          }
          onClick={myFunction}
        >
          <div className={styles.linea1}></div>
          <div className={ styles.linea2}></div>
          <div className={styles.linea3}></div>
        </div>
      </div>
      {/* <div class="menu-container" ></div> */}

       <div className={first?styles.showMenu:styles.showMen}>
        <div className={styles.meWrap}>
          <div className={styles.me}>
            <div> 
            <Link activeClass="active"   to="home" spy={true} smooth={true} offset={0} duration={300}>
              <h2 className={styles.text}>Home </h2>
           </Link>
           </div>
           <div>  
            <Link activeClass="active"   to="portafolio" spy={true} smooth={true} offset={0} duration={300}>
            <h2 className={styles.text}>Portafolio </h2> 
           </Link>
           </div>
           <div>  
            <Link activeClass="active"   to="contact" spy={true} smooth={true} offset={0} duration={300}>
             <h2  className={styles.text}>  Contact</h2>
           </Link>
           </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
