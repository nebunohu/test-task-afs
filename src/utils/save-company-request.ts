import { API_BASE_URL, token } from '../consts';

const saveCompanyRequest = async (id: string, form: any) => {
  const res = await fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'authorization': token,
      'content-type': 'application/json',
    },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  
  return data;
};

export default saveCompanyRequest;