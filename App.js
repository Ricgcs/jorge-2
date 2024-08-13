import { StatusBar } from 'expo-status-bar';
import { Dimensions } from "react-native";
import { StyleSheet, Text, Touchable, View} from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';
import BotaoBonito from './BotaoBonito';


export default function App() {

  function rollDice(x){
    console.log(Math.random() *10).toFixed(0)
  }
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Impressionante</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.row}>
        <BotaoBonito nome="1"/>
        <BotaoBonito nome="2"/>
        <BotaoBonito nome="3"/>
        <BotaoBonito nome="4"/>
          
        </View>

        <View style={styles.row}>
        <BotaoBonito nome="5"/>
        <BotaoBonito nome="6"/>
        <BotaoBonito nome="7"/>
        <BotaoBonito nome="8"/>
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