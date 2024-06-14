import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Grid,Typography,Button, TextField, IconButton } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startSavingNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import { startDeletingNote } from '../../store/auth';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {active:note,messageSaved,isSaving} = useSelector(state => state.journal);
  const {body,title,date, onInputChange,formState} = useForm(note);
  const dateString = useMemo(()=>{
    const newDate = new Date(date);
    return newDate.toUTCString();
  },[date]);

  const fileInputRef = useRef();

  useEffect(()=>{
    dispatch(setActiveNote(formState));
  },[formState]);
  useEffect(()=>{
    if(messageSaved.length > 0){
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  },[messageSaved]);
  const onSaveNote = () => {
    dispatch(startSavingNote());
  }
  const onFileInputChange = ({target}) => {
    if(target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  }
  const onDelete = () => {
    dispatch(startDeletingNote());
  }
  return (
    <Grid
        className='animate__animated animate__fadeIn animate__faster'
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb: 1}}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>
          <input multiple type='file' onChange={onFileInputChange} style={{display: 'none'}} ref={fileInputRef}/>
          <IconButton onClick={()=>fileInputRef.current.click()} color='primary' disabled={isSaving}>
            <UploadOutlined/>
          </IconButton>
          <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{p: 2}}>
            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type='text'
            variant='filled'
            fullWidth
            name='title'
            value={title}
            onChange={onInputChange}
            placeholder='Ingrese un título'
            label='Título'
            sx={{border: 'none',mb: 1}}
          />
          <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            name='body'
            value={body}
            onChange={onInputChange}
            placeholder='¿Qué pasó hoy?'
            minRows={5}
          />
          <Grid container justifyContent='end'>
            <Button
              onClick={onDelete}
              sx={{mt: 2}}
              color='error'
              >
              <DeleteOutline/>
              Borrar
            </Button>
          </Grid>
          <ImageGallery images={note.imageUrls}/>
        </Grid>
    </Grid>
  )
}
