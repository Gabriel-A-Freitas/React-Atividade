// App.jsx
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import TarefasScreen from './Telas/TarefaScreen';
import FormularioTarefa from './Telas/AddTarefa';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.formularioContainer}>
          <FormularioTarefa />
        </View>
        <View >
          <TarefasScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5bb90',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formularioContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listaContainer: {
    backgroundColor: '#ccdae4',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;
