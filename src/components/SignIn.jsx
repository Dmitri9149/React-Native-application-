import { TextInput, Pressable, StyleSheet, View } from 'react-native';
import { Formik, useFormik  } from 'formik';

import Text from './Text';
import theme from '../theme'

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
 //   paddingLeft: 10,
//    marginRight: 10,
    rowGap: 10,
    backgroundColor: theme.background.textBackgroundDark,
  },
  asRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: theme.background.textBackgroundLight
  },
});

const initialValues = {
    username: '',
    password: '',
  };

const SignInForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
      });

      return (
        <View style={styles.flexContainer}>
          <View style={styles.asRow}>
          <TextInput 
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
          />
          </View>
          <View style={styles.asRow}>
          <TextInput secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          </View>
          <View style={styles.asRow}>
          <Pressable onPress={formik.handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
          </View>
        </View>
      );
};


const SignIn = () => {
    const onSubmit = (values)  => {
    const { username, password}  = values;
    console.log(`Password: ${password} and Username: ${username}`)
    } 
  return <SignInForm onSubmit={onSubmit}/>;
};

export default SignIn;