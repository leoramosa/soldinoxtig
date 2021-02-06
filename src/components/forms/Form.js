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
          Escríbeme por Whatsapp:
          <div className="whastapp-btn">
            <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51990319569&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20de%20sus%20servicios..." rel="noopener noreferrer" target="_blank">
               <i className="fab fa-whatsapp"></i> Enviame un mensaje
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
