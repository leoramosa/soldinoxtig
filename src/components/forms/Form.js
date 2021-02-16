import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className='form-content-left'>
        <div className="map_google">
          <iframe  className="content_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4446567719825!2d-77.02497137076982!3d-12.058746887954307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8bcf313dbe1%3A0x905e58ad267afd02!2sPje.%20Manuel%20Carbajal%2C%20La%20Victoria%2015033!5e0!3m2!1sen!2spe!4v1613441873697!5m2!1sen!2spe" width="600" height="280" frameborder="0" allowfullscreen="" aria-hidden="false" title="google-map"></iframe>
          
          </div>
          Escríbenos por Whatsapp:
          <div className="whastapp-btn">
            <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51981325313&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20de%20sus%20servicios..." rel="noopener noreferrer" target="_blank">
               <i className="fab fa-whatsapp"></i> Envianos un mensaje
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
