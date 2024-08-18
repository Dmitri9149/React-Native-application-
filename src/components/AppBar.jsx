import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black"
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Text style={{color: "white"}}>Button</Text>
  </View>;
};

export default AppBar;