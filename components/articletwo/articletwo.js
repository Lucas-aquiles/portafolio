import Image from 'next/image';
import styles from './articletwo.module.css'
import profilePic from '../../public/images/wd1.svg'
import profileTeam from '../../public/images/team.svg'

export default function ArticleTwo() {



  return (


    <div className={styles.container3}>
        <div className={styles.part3}>

  <Image
    src={profilePic} // Route of the image file
    // height={1000} // Desired size with correct aspect ratio
    // width={1000} // Desired size with correct aspect ratio
    alt="Your Name"
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
    
    // style={{
    //   objectFit: 'cover',
    // }}

  />
   </div>
<p>
  Estas son las tecnologias q utilizo y conozco 
</p>

</div>
</div>
  )
}
