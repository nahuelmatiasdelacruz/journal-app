import { useDispatch } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {email,password,onInputChange,onResetForm} = useForm({
    email: '',
    password: '',
  })
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
  }
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField 
                label='Correo' 
                type='email'
                name='email'
                value={email}
                onChange={onInputChange}
                placeholder='correo@google.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField 
                label='Contraseña' 
                type='password' 
                name='password'
                value={password}
                onChange={onInputChange}
                placeholder='Contraseña'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop: 1}}>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
                  <Google/>
                  <Typography sx={{marginLeft: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}