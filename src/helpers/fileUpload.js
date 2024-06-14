
export const fileUpload = async (file) => {
  if(!file) throw Error('No hay ningún archivo para subir');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/journal-app-jsx/upload';
  const formData = new FormData();
  formData.append('upload_preset','react-journal');
  formData.append('file',file);
  try{
    const response = await fetch(cloudUrl,{
      method: 'POST',
      body: formData
    });
    if(!response.ok) throw new Error('No se pudo subir la imágen');
    const cloudResponse = await response.json();
    return cloudResponse.secure_url;
  }catch(e){
    console.log('Error: ', e.message);
    throw new Error(e.message);
  };
};