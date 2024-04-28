// ComponentA.jsx
// import { useState } from "react";
import Modal from "../Modal/Modal";
import css from "./ComponentA.module.css";

// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button className={css.btnA} onClick={openModal}>
//         Open modal
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// export default ComponentA;

import { useToggle } from "../../hooks/useToggle";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button className={css.btnA} onClick={open}>
        Open modal
      </button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;
