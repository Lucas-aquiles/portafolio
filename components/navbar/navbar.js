//rfc
import { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [first, setFirst] = useState(false);

  console.log(first);
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
            first === true ?  `${styles.menu} ${styles.change}`:styles.menu
          }
          onClick={myFunction}
        >
          <div className={styles.linea1}></div>
          <div className={ styles.linea2}></div>
          <div className={styles.linea3}></div>
        </div>
      </div>
      {/* <div class="menu-container" ></div> */}

       <div className={first === true ? styles.showMenu:styles.showMen}>
        <div className={styles.meWrap}>
          <div className={styles.me}>
            <div>home</div>
            <a className={styles.enlace} href="#portafolio">
              {" "}
              <p> portafolio</p>
            </a>

            <div>contact</div>
          </div>
        </div>
      </div> 
    </div>
  );
}
