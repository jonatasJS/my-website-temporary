import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from '../../styles/Home.module.css';
import { motion } from "framer-motion";

export default function ButtonMovePage() {
  const [isActive, setIsActive] = useState('none');

  useEffect(function mont() {
    function onScroll() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsActive("block");
      } else {
        setIsActive("none");
      }
    }

    window.addEventListener("scroll", onScroll);
  });

  function toTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <motion.button onClick={toTop} style={{
        display: isActive
      }}
      className={styles.buttonToUp}
      // animate={{ y: 0 }}
      // whileHover={{
      //   zIndex: 999,
      //   transform: [0, 0, -30, 0, -15, 0, 0],
      //   transition: {
      //     delay: .2
      //   }
      // }}
      >
        <span className="fa fa-rocket"></span>
      </motion.button>
    </>
  );
}

// fa-arrow-up