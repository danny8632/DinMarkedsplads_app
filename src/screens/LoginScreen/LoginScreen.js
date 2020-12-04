import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { Button } from 'common';
import { ThemeContext } from 'theme';

import { Posts } from 'constants';

const LoginScreen = ({navigation}) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ScrollView removeClippedSubviews={true}>
            <View style={styles.container}>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

export default LoginScreen;