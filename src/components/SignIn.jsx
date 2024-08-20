import { TextInput, Pressable, View } from 'react-native';
import { Formik, useFormik  } from 'formik';

import Text from './Text';

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
        <View>
          <TextInput
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
          />
          <TextInput
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          <Pressable onPress={formik.handleSubmit}>
            <Text>Submit</Text>
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