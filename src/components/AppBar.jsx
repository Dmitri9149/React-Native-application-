import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row'
  },
  textstyle: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 15,
}
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <Text style={styles.textstyle}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/sign_in">
            <Text style={styles.textstyle}>SignIn</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  )
};
 


export default AppBar;