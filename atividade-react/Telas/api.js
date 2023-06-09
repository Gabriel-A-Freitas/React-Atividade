import axios from 'axios';

// Função para carregar as tarefas do backend
export const carregarTarefas = () => {
  return axios.get('http://localhost:5107/Tarefas');
};

// Função para excluir uma tarefa no backend
export const excluirTarefa = (id) => {
  return axios.delete(`http://localhost:5107/Tarefas/${id}`);
};

// Função para adicionar uma nova tarefa no backend
export const adicionarTarefa = (tarefa) => {
  return axios.post('http://localhost:5107/Tarefas', tarefa);
};
