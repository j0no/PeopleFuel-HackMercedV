import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native';
import CommonScreenProps from '../types/CommonScreenProps';

const InputStyle = {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
    marginBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    borderRadius: 8
};

const Login = ({ navigation }: { navigation: any }) => {
    const [email, onEmailChangeText] = React.useState('email');
    const [pw, onPWChangeText] = React.useState('password');

    const onLogin = () => {
        // fetch('http://localhost:4000')
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(
        //             'res', res
        //         )
        //     }).catch((err) => {
        //         console.log('err', err)
        //     })
        navigation.navigate('Main')
    }

    return <View style={styles.page}>
        <Text style={styles.mainMsg}>  Welcome to Broccoli </Text>
        <TextInput
            style={InputStyle}
            onChangeText={(text) => {
                console.log('text has changed to ', text)
                onEmailChangeText(text)
            }}
            value={email} />
        <TextInput
            style={InputStyle}
            onChangeText={text => onPWChangeText(text)}
            value={pw} />
        <Button
            title="Login"
            onPress={onLogin}
        />
        <Image style={styles.veggiesImg} source={require('../assets/splash.png')} />
    </View>
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 120,
        display: 'flex',
        width: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'white',
        height: '100%'
    },
    loginButton: {
    },
    mainMsg: {
        width: '100%',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30
    },
    veggiesImg: {
        marginTop: 20,
        display: 'flex'
    }
});

export default Login;   