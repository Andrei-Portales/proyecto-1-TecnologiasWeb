import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="all-content-footer">
    <div className="image-logo">
      <img
        src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
        alt="logo"
      />
    </div>
    <div className="text-content">
      <a href="#">Terminos y Aviso de privacidad</a>
      <a href="#">Envianos tus comentarios</a>
      <a href="#">Ayuda</a>
      <div>©1996-2021, Amazon.com, Inc. o sus filiales</div>
    </div>
  </div>
);

export default Footer;
