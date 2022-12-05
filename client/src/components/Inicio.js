import React, { useState } from 'react';

import FormSignup from './FormInputInicio';
import './Inicio.css';

const Inicio = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
            <FormSignup submitForm={submitForm} />
        <div className='form-content-right'>
           <img className='form-img' src='img/register.svg' alt='imgholder' />
        </div>
            
      </div>
    </>
  );
};

export default Inicio;