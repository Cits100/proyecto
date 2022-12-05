
import React, { useState } from 'react'

import validator from 'validator';
import { regexPassword } from '../utils'
import './Registro.css';

function FormSignup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    showPassword: false,
    showRepeatPassword: false,
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    fetchError: false,
    fetchErrorMsg: '',
  })

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value
    switch (fieldName) {
      case 'email':
        validator.isEmail(currValue)
          ? setErrors({ ...errors, email: false })
          : setErrors({ ...errors, email: true })
        break

      case 'password':
        regexPassword.test(currValue)
          ? setErrors({ ...errors, password: false })
          : setErrors({ ...errors, password: true })
        break

      case 'repeatPassword':
        currValue === values.password
          ? setErrors({ ...errors, repeatPassword: false })
          : setErrors({ ...errors, repeatPassword: true })
        break
    }
    setValues({ ...values, [fieldName]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })

      if (!res.ok) {
        const error = await res.json()
        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        })
      }

      const data = await res.json()
      // this is just a visual feedback for user for this demo
      // this will not be an error, rather we will show a different UI or redirect user to dashboard
      // ideally we also want a way to confirm their email or identity
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      })
      setValues({
        email: '',
        password: '',
        repeatPassword: '',
      })
      return
    } catch (error) {
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg:
          'There was a problem with our server, please try again later',
      })
    }
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Empieza a escribir Cartas hoy, solo tienes que registrarte y puedes empezar!
        </h1>
        {/* <div className='form-inputs'>
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
        </div> */}
        <div className='form-inputs'>
          <label className='form-label'>Correo</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Ingrese su email'
            value={values.email}
            onChange={handleChange('email')}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingrese su contraseña'
            value={values.password}
            onChange={handleChange('password')}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirme Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme su contraseña'
            value={values.password2}
            onChange={handleChange('repeatPassword')}
          />
          
        </div>
        <button className='form-input-btn' type='submit' onSubmit={handleSubmit}>
          Sign up
        </button>
        <span className='form-input-login'>
          Ya tienes una cuenta? Inicia sesión <a href='/'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;