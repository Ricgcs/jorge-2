import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View} from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';

export default function BotaoBonito() { // Melhor usar PascalCase para nomes de componentes
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>teste</Text>
        </TouchableOpacity>
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
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'space-around',
  
      width: width,
      height: height,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:'center',
      backgroundColor: 'black',
      width: width,
    },
    button: {
      height: height * 0.15,
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