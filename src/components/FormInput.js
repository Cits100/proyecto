import React from 'react';
import validate from './validateInfo';
import useForm from './UseForm';
import './Registro.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Empieza a escribir Cartas hoy, solo tienes que registrarte y puedes empezar!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ingrese su nombre'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
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
        <div className='form-inputs'>
          <label className='form-label'>Confirme Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme su contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Ya tienes una cuenta? Inicia sesión <a href='/Inicio'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;