import { StyleSheet } from 'react-native';

export const ListaTarefaStyle = StyleSheet.create({
  tarefaContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  tarefaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tarefaInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tarefaDescricao: {
    fontSize: 14,
    marginBottom: 5,
  },
  tarefaData: {
    fontSize: 12,
    color: '#888',
  },
  excluirButton: {
    backgroundColor: '#ffcccc',
    padding: 5,
    borderRadius: 5,
  },
  excluirButtonText: {
    color: '#f00',
    fontSize: 12,
  },
});

