import { SaveOutlined } from '@mui/icons-material';
import {Grid,Typography,Button, TextField} from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid 
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb: 1}}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>28 de Agosto, 2023</Typography>
        </Grid>
        <Grid item>
          <Button color='primary' sx={{p: 2}}>
            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type='text'
            variant='filled'
            fullWidth
            placeholder='Ingrese un título'
            label='Título'
            sx={{border: 'none',mb: 1}}
          />
          <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder='¿Qué pasó hoy?'
            minRows={5}
          />
          <ImageGallery/>
        </Grid>
    </Grid>
  )
}
