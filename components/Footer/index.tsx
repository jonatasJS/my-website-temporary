import React from "react";
import Link from "next/link";
import { I18n } from '../../translate/i18n';

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
            <Link href="/">{I18n.t('messages.home')}</Link>
            <br />
            <Link href="/contact">{I18n.t('messages.contact')}</Link>
            <br />
            <Link href="/about">{I18n.t('messages.aboutUs')}</Link>
          </p>

          <div className={styles.footerRight}>
            <p>{I18n.t('messages.txt')}</p>
            <br />
            <br />
            <form onSubmit={e => e.preventDefault()} action="" method="post">
              <input disabled style={{ cursor: "not-allowed" }} type="email" name="email" placeholder="E-mail" />
              <textarea disabled style={{ cursor: "not-allowed" }} name="message" placeholder="Mensagem"></textarea>

              <button disabled style={{ cursor: "not-allowed" }}>{I18n.t('buttons.send')}</button>
            </form>
          </div>

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
          <p className={styles.footerCompanyName}>Copyright &copy; 2021-{new Date().getFullYear()} Next Rockt All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}