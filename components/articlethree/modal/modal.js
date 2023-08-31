import Image from "next/image";
import styles from "./modal.module.css";
import profilePic from "../../../public/images/lucas.png";
import { useState } from "react";
import OpenModal from "./openModal";

export default function Modal({ git, deploy, title, description, addres }) {
  const [state, setState] = useState(false);

  function open() {
    setState(!state);
  }

  return (
    <div className={styles.container}>
      <div className={styles.portafolio} onClick={open}>
        <Image
          src={addres} // Route of the image file
          // height={1000} // Desired size with correct aspect ratio
          // width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
          width={300}
          height={200}
        />
      </div>

      <OpenModal
        git={git}
        deploy={deploy}
        description={description}
        title={title}
        addres={addres}
        state={state}
        setState={setState}
      />
    </div>
  );
}
