import axios from "axios";

const API_URL = "https://proweb.leoproti.com.br/alunos";


const listar = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (e) {
    console.error("Erro ao listar alunos:", e);
    throw e;
  }
};

const obter = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

const criar = async (obj) => {
  const { data } = await axios.post(API_URL, obj);
  return data;
};

const atualizar = async (id, obj) => {
  const { data } = await axios.put(`${API_URL}/${id}`, obj);
  return data;
};

const excluir = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};
