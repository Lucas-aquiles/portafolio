import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import Topsection from "../components/topsection/topsection";
import ArticleOne from "../components/articleone/articleone";
import ArticleTwo from "../components/articletwo/articletwo";
import ArticleThree from "../components/articlethree/articlethree";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="portafolio  web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topsection />
      <Navbar />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <Footer />
    </div>
  );
}
