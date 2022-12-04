import React, { useState } from 'react';
import './Registro.css';
import FormSignup from './FormInput';


const Registro = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='img/register.svg' alt='imgholder' />
        </div>
        
          <FormSignup submitForm={submitForm} />
        
      </div>
    </>
  );
};

export default Registro;