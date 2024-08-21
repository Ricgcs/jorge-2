import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
// Definindo as dimensões
const { width, height } = Dimensions.get('window');

// Função de cálculo
function calc(teste) {
  return Math.floor(Math.random() * (teste + 1));
}

// Tela principal com navegação
function App({ navigation }) {
  const [pegar, enviar] = useState();
  const [resultado, setResultado] = useState();
  const [resultados, setResultados] = useState([]);

  const handlePress = (value) => {
    const novoResultado = calc(value);
    setResultado(novoResultado);
    setResultados([...resultados, novoResultado]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{resultado}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home', { resultados })}
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(2)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/bola.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(4)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/triangulo.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(6)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/quadrado.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(8)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango.png')} /></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(10)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango_de_lado.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(12)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/pentagono.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(20)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/hexagono.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(100)}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango_de_lado_dois.png')} /></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Tela Home com FlatList
function HomeScreen({ route }) {
  const { resultados } = route.params || { resultados: [] }; // Pega os resultados passados como parâmetro

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={resultados}
        renderItem={({ item }) => <Text style={{ fontSize: 20, margin: 10 }}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()} // Usa o índice como chave
      />
    </View>
  );
}

// Configuração do Stack Navigator
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'space-around',
    width: width,
    height: height * 0.3,
    borderRadius: height * 0.1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    height: height * 0.1,
  },
  button: {
    height: height * 0.1,
    width: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
