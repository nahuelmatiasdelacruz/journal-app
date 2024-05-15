import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formInitialData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value = '')=>value.includes('@'),'El correo debe de tener un @'],
  password: [(value = '')=>value.length >= 6,'La contraseña debe tener mínimo de 6 caracteres'],
  displayName: [(value = '')=>value.length >= 1,'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted,setFormSubmitted] = useState(false);
  const {displayName = '',email = '',password = '',onInputChange,formState,isFormValid,displayNameValid,emailValid,passwordValid} = useForm(formInitialData,formValidations);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }
  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField 
                label='Nombre completo'
                name='displayName'
                onChange={onInputChange}
                value={displayName}
                type='text' 
                placeholder='Nombre completo'
                fullWidth
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField 
                label='Correo' 
                type='email'
                name='email'
                onChange={onInputChange}
                value={email}
                placeholder='correo@google.com'
                fullWidth
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField 
                name='password'
                onChange={onInputChange}
                value={password}
                label='Contraseña' 
                type='password' 
                placeholder='Contraseña'
                fullWidth
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop: 1}}>
              <Grid item xs={12}>
                <Button onClick={onSubmit} variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};