import { StatusBar } from 'expo-status-bar';
import { Dimensions } from "react-native";
import { StyleSheet, Text, Touchable, View, Image} from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';
import BotaoBonito from './BotaoBonito';
import { useState } from 'react';

export default function App() {
  const [pegar, enviar] = useState();
  const [resultado, setResultado] = useState();
 //let [teste, setTeste] = useState([...new Array]);
 
function calc(teste){
  
  const calcular = Math.floor(Math.random() * (teste + 1));
  //setTeste.push(calcular)
 
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
          <TouchableOpacity style={styles.button} onPress={() => {enviar(2); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/bola.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(4); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/triangulo.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(6); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/quadrado.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(8); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango.png')}/></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(10); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango_de_lado.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(12); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/pentagono.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(20); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/hexagono.png')}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {enviar(100); setResultado(calc(pegar))}}>
            <Text style={styles.buttonText}><Image source={require('./imagem/losango_de_lado_dois.png')}/></Text>
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
    backgroundColor: '#DCDCDC',
    justifyContent: 'space-around',
    width: width,
    height: height*0.3,
    borderCurve:height*0.1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
   
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
})