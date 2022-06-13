import { API_BASE_URL, token } from '../consts';

const deletePhotoRequest = async (id: string, imageName: string) => {
  const res = await fetch(`${API_BASE_URL}/companies/${id}/image/${imageName}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });
  
  return ;
};

export default deletePhotoRequest;