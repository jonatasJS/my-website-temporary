import React, { useCallback, useState } from 'react';
import Link from "next/link";
import { I18n } from '../../translate/i18n';
import { ToastContainer, toast } from 'react-toastify';

import styles from '../../styles/Home.module.css';

export default function Footer() {
  const styleAd = {
    // background: "black",
    width: 550,
    height: 250,
    display: "flex",
    // marginRight: "2rem",
    marginLeft: "2rem"
  }

  const [loading, setLoading] = useState(0);

  const onHandleSubmit = useCallback((e) => {
    e.preventDefault();

    const inputs = document.getElementsByTagName('input');
    const description = document.getElementsByTagName('textarea')[0].value;

    const formData = {
      name: inputs[0].value,
      email: inputs[1].value,
      subject: inputs[2].value,
      description,
    };

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.subject === '' ||
      formData.description === ''
    ) {
      toast('📝 Favor preencher todos os campos', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyStyle: {
          fontFamily: 'Source Sans Pro, Ubuntu',
          fontSize: 18,
          color: '#272727',
        },
      });
      return;
    }

    toast.info('📤 Enviando e-mail...', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyStyle: { fontFamily: 'Source Sans Pro, Ubuntu', fontSize: 20 },
    });

    setLoading(1);

    fetch('https://formspree.io/f/xbjqnred', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('🚀 E-mail enviado com sucesso!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Source Sans Pro, Ubuntu', fontSize: 20 },
          });
        } else {
          toast.error('😓 Erro ao enviar o e-mail', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Source Sans Pro, Ubuntu', fontSize: 20 },
          });
        }

        for (let i = 0; i < 3; i += 1) {
          inputs[i].value = '';
        }

        document.getElementsByTagName('textarea')[0].value = '';

        setLoading(0);
      })
      .catch(() => {
        toast.error('😓 Erro ao enviar o e-mail', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          bodyStyle: { fontFamily: 'Source Sans Pro, Ubuntu', fontSize: 20 },
        });

        setLoading(0);
      });
  }, []);

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

          <div className={styles.footerIcons}>
            <Link href="https://discord.gg/D9SkzTZxrM">
              <a className={styles.discord}>
                <i aria-hidden className="fab fa-discord"></i>
              </a>
            </Link>
            <Link href="https://wa.me/message/IPZCPPTT5J5UH1">
              <a className={styles.whatsapp}>
                <i aria-hidden className="fab fa-whatsapp"></i>
              </a>
            </Link>
          </div>
          <p className={styles.footerCompanyName}>Copyright &copy; 2020-{new Date().getFullYear()} Next Rockt All Right Reserved</p>
        </div>
        <div className={styles.footerRight}>
          {/* <p>{I18n.t('messages.txt')}</p>
          <br />
          <br />
          <form onSubmit={e => {e.preventDefault();onHandleSubmit(e)}}>
            <input type="text" name="name" placeholder="Seu Nome" />
            <input type="email" name="email" placeholder="E-mail" />
            <textarea cols={120} name="message" placeholder="Mensagem"></textarea>

            <button type="submit">{I18n.t('buttons.send')}</button>
          </form> */}
          <div
            style={styleAd}
          >
            <ins className="adsbygoogle"
              data-ad-client="ca-pub-4515639184646084"
              data-ad-slot="8052429076"
              data-ad-format="auto"
              data-adtest="on"
              data-full-width-responsive="true"></ins>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </footer>
    </>
  );
}