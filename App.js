import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View, Button } from 'react-native';
import { width } from './src/screans/constants/medidas';
import { height } from './src/screans/constants/medidas';
import { TouchableOpacity } from 'react-native-web';
export default function App() {
  return (
    <View  style={styles.container}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.viw2}>
      <View style={styles.inviw1}>
<Button style={styles.Button}>1</Button>
<Button style={styles.Button}>2</Button>
<Button style={styles.Button}>3</Button>
<Button style={styles.Button}>4</Button>
</View>

<View style={styles.inviw2}>
<Button style={styles.Button}>5</Button>
<Button style={styles.Button}>6</Button>
<Button style={styles.Button}>7</Button>
<Button style={styles.Button}>8</Button>
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

  viw2:{
    flex: 1,
    backgroundColor: 'black', 
    justifyContent:"space-around",
    width:width,
  },

  inviw1:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor: 'black', 
    width:width,
    marginTop:height*0.1,
  
  },

  inviw2:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor: 'black', 
    width:width,

  },
  Button:{
    height:height*0.1,
    width:width*0.3
  }
});
