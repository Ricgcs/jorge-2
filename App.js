import { StatusBar } from 'expo-status-bar';
import { Dimensions } from "react-native";
import { StyleSheet, Text, Touchable, View} from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  const [pegar, enviar] = useState();
  const [resultado, setResultado] = useState();
function calc(teste){
  var historico = []
  const calcular = Math.floor(Math.random() * (teste + 1));
  historico.push(calc);
return calcular;
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{resultado}</Text>
       
        <StatusBar style="auto" />
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(1); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(2); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(3); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(4); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(5); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(6); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(7); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(8); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    backgroundColor: 'black',
    justifyContent: 'space-around',
    width: width,
    height: height*0.3,
    borderCurve:height*0.1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: 'black',
    width: width,
    height: height * 0.1,
  },
  button: {
    height: height * 0.1,
    width: width * 0.2,
    backgroundColor: 'blue', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, 
  },
});