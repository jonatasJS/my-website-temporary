import React, { useState } from "react";
import Link from "next/link";

import styles from '../../styles/Home.module.css';

export default function ButtonMovePage() {
  const [isActive, setIsActive] = useState('none')

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsActive("block");
    } else {
      setIsActive("none");
    }
  }

  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button onClick={toTop} style={{
        display: isActive
      }} className={styles.buttonToUp}>
        <span className="fa fa-arrow-up"></span>
      </button>
    </>
  );
}