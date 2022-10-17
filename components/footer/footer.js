import Image from 'next/image';
import styles from './footer.module.css'
import profilePic from '../../public/images/send.svg'


export default function Footer() {

  return (

    <div className={styles.container}>
        <div className={styles.part1}>
            <h1>hola</h1>
            </div>    
<Image
    src={profilePic} // Route of the image file
    // height={1000} // Desired size with correct aspect ratio
    // width={1000} // Desired size with correct aspect ratio
    alt="Your Name"
  />



    </div>
  )
}
