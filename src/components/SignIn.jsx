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
  asRowTextInput: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: theme.background.textBackgroundLight
  },
  asRowSignIn: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.background.blueLike,
    justifyContent: 'center'
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
          <View style={styles.asRowTextInput}>
          <TextInput 
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
          />
          </View>
          <View style={styles.asRowTextInput}>
          <TextInput secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          </View>
          <Pressable onPress={formik.handleSubmit}>
          <View style={styles.asRowSignIn}>
            <Text color='white' >SignIn</Text>
          </View>
          </Pressable>
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