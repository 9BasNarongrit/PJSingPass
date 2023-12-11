import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import logoPNG from '../../assets/image/logo.png';




const Logo = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source =  {logoPNG}/>
    </View>
  );
}

export default Logo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4333d',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 320,
    height: 320,
  },
});

/*
------------------------------------เปลี่ยนหน้า------------------------------------
const Logo = ({ navigation, route }) => {
  const onPressNavigate = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressNavigate}>
        <Image style={styles.logo}
          source={logoPNG} />
      </TouchableOpacity>
    </View>
  );
}

export default Logo*/


/*
------------------------------------setTimout------------------------------------
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      Alert.alert('I am appearing...', 'After 5 seconds!');
    }, 5000);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Alert will appear after 5 seconds</Text>
    </View>
  );
};

export default App;
*/


