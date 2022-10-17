import Image from 'next/image';
import profilePic from '../../public/images/20.svg'
import styles from './articleone.module.css'





export default function ArticleOne() {



  return (
    <div className={styles.container2}>
<div className={styles.oval}>
        <div className={styles.imgPersonal}> </div>
      {/* <img className='imgPersonal'  src={lucas} /> */}

</div>
<div  className={styles.childText}>
  
 
<p>
Hey! My name is Lucas.
I am a web & font
designer based in Utah
I have been working as a freelance designer and front-end developer since 2007. I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.

</p>
<div className={styles.redes}>
  {/* <img   className='icon'  src= { require('../imag/instagram.svg').default }  />
  <img src= { require('../imag/linkedin-original.svg').default }  />
  <img src= { require('../imag/twitter.svg').default }  /> */}


</div>
</div >




</div>
  )
}
