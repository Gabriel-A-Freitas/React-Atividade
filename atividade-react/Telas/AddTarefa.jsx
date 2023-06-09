// AddTarefa.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import moment from 'moment';
import { adicionarTarefa } from './api';
import { styles } from '../styles/AddTarefaStyle';

const FormularioTarefa = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataTermino, setDataTermino] = useState('');

  const formatarData = (data) => {
    return moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD'); // Formato desejado: "YYYY-MM-DD"
  };

  const handleAdicionarTarefa = () => {
    const novaTarefa = {
      titulo,
      descricao,
      dataTermino: formatarData(dataTermino)
    };

    adicionarTarefa(novaTarefa)
      .then(response => {
        console.log('Tarefa adicionada:', response.data);
        // Faça algo com a resposta, se necessário
        // Limpe os campos do formulário
        setTitulo('');
        setDescricao('');
        setDataTermino('');
      })
      .catch(error => {
        console.error('Erro ao adicionar a tarefa:', error);
        // Trate o erro de acordo com as suas necessidades
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição"
      />

      <Text style={styles.label}>Data de Término</Text>
      <TextInput
        style={styles.input}
        value={dataTermino}
        onChangeText={setDataTermino}
        placeholder="(DD/MM/YYYY)"
      />

      <Button title="Adicionar Tarefa" onPress={handleAdicionarTarefa} />
    </View>
  );
};

export default FormularioTarefa;
