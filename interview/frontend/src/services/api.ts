// Em algum lugar no seu código frontend (ex: src/services/api.ts)
import axios from 'axios';

const api = axios.create({
  // Use o nome do serviço do backend como hostname!
  // A porta é a porta INTERNA do contêiner, não a que foi mapeada para o seu PC.
  baseURL: 'http://backend:3000',
});

export default api;