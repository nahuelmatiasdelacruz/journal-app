import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from "../../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'journal-app-jsx',
  api_key: '542192932824934',
  api_secret: 'yesPFTQX2RJwe1ey9Fiz4n5inGg',
  secure: true,
})

describe('Pruebas en fileUpload',  ()=>{
  test('Debe subir el archivo correctamente a Cloudinary',async ()=>{
    const imageUrl = 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg';
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob],'foto.jpg');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });
  
  test('Debe retornar null',async ()=>{
    const file = new File([],'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});