import { useCallback, useState } from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';

import {
  Container,
  Form,
} from '../../styles/contactStyle';

export default function Contato(): JSX.Element {
  const [loading, setLoading] = useState(0);
  const [playAudio, setPlayAudio] = useState('');

  const scriptVol = 'const audio=document.getElementById("audio");console.log(audio);console.log(audio.volume);audio.volume = 0.2;console.log(audio.volume);'

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();

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
      setPlayAudio('error');
      return setTimeout(() => setPlayAudio(''), 4000);
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
          setPlayAudio('send');
          setTimeout(() => setPlayAudio(''), 4000);
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
          setPlayAudio('error');
          setTimeout(() => setPlayAudio(''), 4000);
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
        setPlayAudio('error');
        setTimeout(() => setPlayAudio(''), 4000);
        setLoading(0);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Sobre Nós | Next Rocket</title>
        <meta name="og:title" property="og:title" content="Entre em contato" />
      </Head>
      <Container>
        <Form onSubmit={onHandleSubmit} loading={loading}>
          <h1>TESTE</h1>
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
      </Container>
      <audio
        id="audio"
        src={playAudio != '' ? `/audio/${playAudio}.mp3` : ''}
        style={{
          opacity: 0
        }}
        autoPlay
      ></audio>
      <script>
        {scriptVol}
      </script>
    </>
  );
}
