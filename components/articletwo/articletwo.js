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
   <div className={styles.stack}>   
<p>
tech stack
</p>

<Image
    src={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
    
    alt="javascript"    
    width="50"
    height="50"
  
  />

  <Image
    src={"https://cdn-icons-png.flaticon.com/512/888/888859.png"} 
    alt="html"    
    width="50"
    height="50"
  />

<Image
    src={"https://cdn-icons-png.flaticon.com/512/919/919826.png"} 
    alt="css"    
    width="50"
    height="50"
  />
<Image
    src={"https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"} 
    alt="node"    
    width="50"
    height="50"
  />
  <Image
    src={"https://cdn-icons-png.flaticon.com/512/3334/3334886.png"} 
    alt="react"    
    width="50"
    height="50"
  />
  
  <Image
    src={"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png"} 
    alt="Redux"    
    width="50"
    height="50"
  />

  
<Image
    src={"https://cdn-icons-png.flaticon.com/512/477/477532.png"} 
    alt="express"    
    width="50"
    height="50"
  />
  <Image
    src={"https://cdn-icons-png.flaticon.com/512/5968/5968342.png"} 
    alt="postgress"    
    width="50"
    height="50"
  />

<Image
    src={"https://pics.freeicons.io/uploads/icons/png/6886557471580802969-512.png"} 
    alt="sequelize"    
    width="50"
    height="50"
  />
    <Image
    src={"https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"} 
    alt="firebase"    
    width="50"
    height="50"
  />
<Image
    src={"https://pics.freeicons.io/uploads/icons/png/14678610731551953708-512.png"} 
    alt="typescrit"    
    width="50"
    height="50"
  />
   <Image
    src={"https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png"} 
    alt="next"    
    width="50"
    height="50"
  />
  <Image
    src={"https://cdn-icons-png.flaticon.com/512/3813/3813691.png"} 
    alt="material_design"    
    width="50"
    height="50"
  />
   <Image
    src={"https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png"} 
    alt="figma"    
    width="50"
    height="50"
  />


<Image
    src={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png"} 
    alt="sass"    
    width="50"
    height="50"
  />
<Image
    src={"https://styled-components.com/atom.png"} 
    alt="styled-components"    
    width="50"
    height="50"
  />
 
</div>

</div>
</div>
  )
}
