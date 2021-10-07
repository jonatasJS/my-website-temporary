import React from "react";
import Link from "next/link";

import styles from '../../styles/Home.module.css';

export default function Footer() {

  return (
    <>
      <footer id="footer" className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <Link href="/">
            <h3>Next <span>Rocket</span></h3>
          </Link>
          <p className={styles.footerLinks}>
            <Link href="/">Inicio</Link>
            <br />
            <Link href="/contact">Contato</Link>
            <br />
            <Link href="/about">Sobre Nos</Link>
          </p>
          <p className={styles.footerCompanyName}>Copyright &copy; 2021-{new Date().getFullYear()} Next Rockt All Right Reserved</p>
          <div className={styles.footerIcons}>
            <Link href="https://discord.gg/D9SkzTZxrM">
              <span className={styles.discord}>
                <i className="fab fa-discord"></i>
              </span>
            </Link>
            <Link href="https://wa.me/message/IPZCPPTT5J5UH1">
              <span className={styles.whatsapp}>
                <i className="fab fa-whatsapp"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p>Entre em contato</p>
          <form onSubmit={e => e.preventDefault()} action="" method="post">
            <input type="text" name="email" placeholder="E-mail" />
            <textarea name="message" placeholder="Mensagem"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </footer>
    </>
  );
}