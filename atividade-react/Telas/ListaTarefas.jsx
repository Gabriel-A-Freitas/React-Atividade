// ListaTarefas.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ListaTarefaStyle } from '../styles/ListaTarefaStyle';

const ListaTarefas = ({ tarefa, excluirTarefa }) => {
  return (
    <View style={ListaTarefaStyle.tarefaContainer}>
      <Text style={ListaTarefaStyle.tarefaTitulo}>{tarefa.titulo}</Text>
      <View style={ListaTarefaStyle.tarefaInfoContainer}>
        <Text style={ListaTarefaStyle.tarefaDescricao}>{tarefa.descricao}</Text>
        <Text style={ListaTarefaStyle.tarefaData}>{tarefa.dataTermino}</Text>
      </View>
      <TouchableOpacity
        style={ListaTarefaStyle.excluirButton}
        onPress={() => excluirTarefa(tarefa.id)}
      >
        <Text style={ListaTarefaStyle.excluirButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListaTarefas;
