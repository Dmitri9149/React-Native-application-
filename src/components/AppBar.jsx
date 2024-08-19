import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  pressable: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    padding: 15,
}
});

const AppBar = () => {
  return <View style={styles.container}>
    <Text style={styles.pressable}>Repositories</Text>
  </View>;
};

export default AppBar;