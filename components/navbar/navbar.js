//rfc
import  {useState} from "react"
import styles from './navbar.module.css';






export default function Navbar() {
  const [first, setFirst] = useState(false)

  function myFunction() {
    // menu.classList.toggle("change-menu");
    // x.classList.toggle("change");
setFirst(!first)
  }

  return (
    <div className={styles.container}>
        
        <div className={styles.containerMenu}>  
    <div className=  {first?styles.menu:`${styles.menu} ${styles.change}`
    }   onClick={myFunction}>
      <div className={ `${styles.linea1} ${styles.change} `}></div>
      <div className={`${styles.linea2} ${styles.change} `}></div>
      <div className={`${styles.linea3} ${styles.change} `}></div>
      </div>
      </div>
    {/* <div class="menu-container" ></div> */}
    
    
    <div className= {(first?styles.showMen:styles.showMenu) }           >
    <div className={styles.meWrap}>
      <div className={styles.me}>
      <div  >home</div>
      <a  className={styles.enlace} href='#portafolio'> <p> portafolio</p></a>

      <div >contact</div>



      
      </div>
    </div>
    </div>





    </div>
  )
}
