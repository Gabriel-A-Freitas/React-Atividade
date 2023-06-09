// TarefasScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ListaTarefas from './ListaTarefas';
import { carregarTarefas, excluirTarefa } from './api';
import { TarefaScreenStyles } from '../styles/TarefaScreenStyle';

const TarefasScreen = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas()
      .then(response => {
        console.log('Tarefas:', response.data);
        setTarefas(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar as tarefas:', error);
      });
  }, []);

  const handleExcluirTarefa = (id) => {
    excluirTarefa(id)
      .then(response => {
        console.log('Tarefa excluída com sucesso');
        // Atualize a lista de tarefas após a exclusão
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      })
      .catch(error => {
        console.error('Erro ao excluir a tarefa:', error);
      });
  };

  return (
    <View style={TarefaScreenStyles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListaTarefas
            tarefa={item}
            excluirTarefa={handleExcluirTarefa}
          />
        )}
      />
    </View>
  );
};

export default TarefasScreen;
