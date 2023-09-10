import React, { useState } from "react";
import styles from "./Modal.module.css"; // Use backticks for importing CSS modules

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.topBanner}>
        <div className={styles.topBannerInner}>
          <p>
            Practice how to create a Modal
            <br></br>
            <button onClick={handleOpen} id="open">
              Open Modal
            </button>
          </p>
        </div>
      </header>

      {isOpen && (
        <div>
          <div className={styles.modalBackdrop}></div>
          <div className={styles.modalBody}>
            <button onClick={handleClose} className={styles.modalClose}>
              Close
            </button>
            <h2>Wombat Newsletter</h2>
            <p>Sign up for our monthly newsletter. No spam. We promise!</p>
            <form onSubmit={""}>
              <p>
                <label htmlFor="email">Email address:</label>
                <input type="text" name="email" />
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
