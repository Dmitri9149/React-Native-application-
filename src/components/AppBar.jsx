import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.bgColors.textPrimary,
  },
  pressable: {
    color: theme.colors.darkBackground,
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