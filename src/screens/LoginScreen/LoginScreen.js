import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { Button } from 'common';

import AsyncStorage from 'react-native';

const LoginScreen = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ScrollView removeClippedSubviews={true}>
            <View style={styles.container}>

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setUsername(text)}
                    value={username}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                />

                <Button title="Login" onPress={() => console.log(username, password)} style={styles.loginBtn} />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop : 40
    },
    textinput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        marginBottom : 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft : 16,
        marginRight : 16
    },
    loginBtn : {
        marginLeft : 16,
        marginRight : 16
    }
});

export default LoginScreen;