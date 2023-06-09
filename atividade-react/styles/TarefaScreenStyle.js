import { StyleSheet } from 'react-native';

export const TarefaScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});
