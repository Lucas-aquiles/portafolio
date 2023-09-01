import Image from "next/image";
import styles from "./openModal.module.css";
import Link from "next/link";

export default function OpenModal({
  git,
  deploy,
  description,
  title,
  addres,
  state,
  setState,
}) {
  function closedModal(e) {
    e.stopPropagation();
    setState(!state);
  }
  function stop(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={state ? styles.containerOpenModal : "null"}
      onClick={closedModal}
    >
      <div className={state ? styles.modal : "null"} onClick={stop}>
        <div className={state ? styles.portafolioImg : styles.hidden}>
          <Image
            src={addres} // Route of the image file
            // height={1000} // Desired size with correct aspect ratio
            // width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
            width={600}
            height={450}
            objectFit="fill"
          />
          <div className={styles.parttwo}>
            <h2> {title}</h2>
            <p> {description}</p>

            <div className={styles.divText}>
              
            { title !== "Recetas" && 
              <Link href={deploy}>
                <a className={styles.enlace} target="_blank">
                  Link Deploy
                </a>
              </Link>
}
            </div>

            <div className={styles.divText}>
              <Link href={git}>
                <a className={styles.enlace} target="_blank">
                  Git gub
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
