import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme1';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme1.bgColors.textPrimary,
  },
  pressable: {
    color: theme1.colors.darkBackground,
    fontWeight: theme1.fontWeights.bold,
    padding: 15,
}
});

const AppBar = () => {
  return <View style={styles.container}>
    <Text style={styles.pressable}>Repositories</Text>
  </View>;
};

export default AppBar;