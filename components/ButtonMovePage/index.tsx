import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from '../../styles/Home.module.css';

export default function ButtonMovePage() {
  const [isActive, setIsActive] = useState('none');

  useEffect(function mont() {
    function scroll() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsActive("block");
      } else {
        setIsActive("none");
      }
    }

    window.addEventListener("scroll", scroll);
  });

  function toTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button onClick={toTop} onLoad={() => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsActive("block");
      } else {
        setIsActive("none");
      }
    }} style={{
        display: isActive
      }} className={styles.buttonToUp}>
        <span className="fa fa-rocket"></span>
      </button>
    </>
  );
}

// fa-arrow-up
