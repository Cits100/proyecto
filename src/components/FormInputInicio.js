import React from 'react';
import validate from './validateInfoInicio';
import useForm from './UseForm';
import './Inicio.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-left'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1> Inicia Sesión</h1>
        <div className='form-inputs'>
          <label className='form-label'>Correo</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Ingrese su email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingrese su contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          No tienes una cuenta? Registrate <a href='/Registro'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;