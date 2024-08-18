import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black"
  },
  pressable: {
    color: "white",
    fontWeight: "bold",
    padding: 15,
}
});

const AppBar = () => {
  return <View style={styles.container}>
    <Text style={styles.pressable}>Repositories</Text>
  </View>;
};

export default AppBar;