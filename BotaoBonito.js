import { StatusBar } from 'expo-status-bar';
import { Dimensions } from "react-native";
import { StyleSheet, Text, Touchable, View} from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';


export default function BotaoBonito(props) { 



    return (
      <View>
       <TouchableOpacity  style={styles.button}>
            <Text style={styles.buttonText}>
                {props.nome}
            </Text>
        </TouchableOpacity>
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