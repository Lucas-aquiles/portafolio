import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Topsection from '../components/topsection/topsection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="portafolio  web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topsection/>

      <Navbar/>











     

   
    </div>
  )
}
