import { useCallback, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';

import { db, firebaseConfig } from '../../services/firebase';

import {
  Container,
  Form,
} from '../../styles/contactStyle';

export default function Contato(): JSX.Element {
  const [loading, setLoading] = useState(0);
  const [db_name, setDB_Name] = useState('');
  const [db_email, setDB_Email] = useState('');
  const [db_subject, setDB_Subject] = useState('');
  const [db_description, setDB_Description] = useState('');

  const audioRef = useRef<HTMLAudioElement>(new HTMLAudioElement);

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();

    /* db?.app?.firestore(firebaseConfig).collection('contacts').add({
    //   name: db_name,
    //   email: db_email,
    //   subject: db_subject,
    //   description: db_description,
    //   date: new Date(),
    // })
    // .then(() => {
    //   setLoading(1);
    //   toast.success('Mensagem enviada com sucesso!');
    // })
    // .catch(error => console.log(error));*/

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
          if(!audioRef.current == null) {
            audioRef.current.play();
          }
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
      setDB_Name('');
      setDB_Email('');
      setDB_Subject('');
      setDB_Description('');
  }, []);

  return (
    <>
      <Head>
        <title>Contato | Next Rocket</title>
        <meta name="og:title" property="og:title" content="Entre em contato" />
      </Head>
      <Container>
        <Form onSubmit={onHandleSubmit} loading={loading}>
          <h1>Entre em contato</h1>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={db_name}
            onChange={(e) => setDB_Name(e.target.value)}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={db_email}
            onChange={(e) => setDB_Email(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={db_subject}
            onChange={(e) => setDB_Subject(e.target.value)}
          />
          <br />
          <textarea
            name="description"
            placeholder="Descrição"
            value={db_description}
            onChange={(e) => setDB_Description(e.target.value)}
            cols={120}
          />
          <br />
          <button
            type="submit"
          >enviar</button>
        </Form>
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
        <audio src="/audio/send.mp3" ref={audioRef}></audio>
      </Container>
    </>
  );
}
