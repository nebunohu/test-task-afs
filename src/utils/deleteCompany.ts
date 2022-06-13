import { API_BASE_URL, token } from '../consts';

const deleteCompny = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });
  const data = await res.json();
  
  return data;
};

export default deleteCompny;