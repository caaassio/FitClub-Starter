import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init('5MBX9Q_hywPBGJ3Dn'); // substitua aqui pela correta
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k3qf38n', 'template_0qars4j', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO</span>
          <span>PARA ELEVAR</span>
        </div>
        <div>
          <span>SEU CORPO</span>
          <span className="stroke-text">COM A GENTE?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Entre com seu email" />
          <button type="submit" className="btn btn-j">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
