import { TextInput, Pressable, StyleSheet, View } from 'react-native';
import { Formik, useFormik, resetForm } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme'

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    rowGap: 20,
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
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
          <View>
            {formik.touched.username && formik.errors.username && (
              <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
          </View>
          <View style={styles.asRowTextInput}>
          <TextInput secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          </View>
          <View>
            {formik.touched.password && formik.errors.password && (
              <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
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
    const onSubmit = (values, {resetForm} )  => {
    const { username, password}  = values;
    console.log(`Password: ${password} and Username: ${username}`)
    resetForm({values: initialValues})
    } 
  return <SignInForm onSubmit={onSubmit}/>;
};

export default SignIn;