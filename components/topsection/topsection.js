
import Image from 'next/image';
import styles from './topsection.module.css'
import profilePic from '../../public/images/20.svg'


export default function Topsection() {



  return (
    <div   id="home" className={styles.container}>
        {/* <h1 className={styles.text}>Programming is the paradise of the curious</h1> */}
        <Image
    src={profilePic} // Route of the image file
    // height={1000} // Desired size with correct aspect ratio
    // width={1000} // Desired size with correct aspect ratio
    alt="Your Name"
  />

    {/* < img src={imagenes}/>
    < img  className='smoke1' src={imagenes2}/>
    < img  className='smoke1 smoke2' src={imagenes2}/> */}

    </div>
  )
}
