import Image from "next/image";
import styles from "./modal.module.css";
import profilePic from "../../../public/images/porta1.svg";
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
          src={profilePic} // Route of the image file
          // height={1000} // Desired size with correct aspect ratio
          // width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
          width={400}
          height={300}
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
