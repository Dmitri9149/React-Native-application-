import Text from './Text';

const SignIn = () => {
    const onSubmit = (values)  => {
        username = values.username;
        password = values.password;
    } 
  return <SignInForm onSubmit={onSubmit}/>;
};

export default SignIn;