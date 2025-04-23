import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const cadastrarAluno = (dados) => API.post('/alunos', dados);
export const gerarRelatorio = () => API.get('/relatorio', { responseType: 'blob' });
