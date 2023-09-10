import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
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
            <div className={styles.dropdownLabel}>
              Dropdown - Controlled With CSS
            </div>
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
        <nav>
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownLabel}
              onClick={handleOpen}
              onMouseEnter={handleMouseEnter}
            >
              Dropdown - Controlled with State
            </div>
            {isOpen && (
              <div
                onMouseLeave={handleMouseLeave}
                className={styles.dropdownMenuWithState}
              >
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
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Dropdown;
