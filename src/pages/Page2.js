import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Page2 = ({ navigation, route }) => {
  const onPressNavigate = () => {
    navigation.navigate("Page3")
  }

  return (
    <View style={styles.container}>
      <Text>koy!</Text>
      <TouchableOpacity onPress={onPressNavigate} style={{ padding: 10, borderRadius: 10, backgroundColor: "red" }}>
        <Text>
          TEST
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Page2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
