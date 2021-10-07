import React from "react";
import Link from "next/link";

import styles from '../../styles/Home.module.css';

export default function ButtonMovePage() {
  return (
    <>
      <Link href="#footer">
        <button className={styles.buttonToDown}>
          <span className="fa fa-arrow-down"></span>
        </button>
      </Link>
    </>
  );
}