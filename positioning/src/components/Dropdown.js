import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  return (
    <>
      <header className={styles.topBanner}>
        <div className={styles.topBannerInner}>
          <p>
            Find out what's going on at Wombat Coffee each month. Sign up for
            our newsletter.
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <nav>
          <div className={styles.dropdown}>
            <div onClick={handleOpen} className={styles.dropdownBabel}>Main Menu</div>
            <div className={styles.dropdownMenu}>
              <ul className={styles.submenu}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/coffees">Coffees</a>
                </li>
                <li>
                  <a href="/brewers">Brewers</a>
                </li>
                <li>
                  <a href="/specials">Specials</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h1>Wombat Coffee Roasters</h1>
      </div>
    </>
  );
};

export default Dropdown;
