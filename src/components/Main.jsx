import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View} from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        flexShrink:1,
        backgroundColor: 'black', //theme.background.testBackgroundDark
    },
});

const Main = () => {
    return (
        <View style= {styles.container}>
            <AppBar/> 
            <Routes>
                <Route path="/" element={<RepositoryList/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/sign_in" element={<SignIn/>} />
            </Routes>
        </View>
    );
};

export default Main;

