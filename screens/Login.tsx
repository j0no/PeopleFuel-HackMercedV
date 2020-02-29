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

const Login = ({ navigation }: CommonScreenProps) => {
    const [email, onEmailChangeText] = React.useState('email');
    const [pw, onPWChangeText] = React.useState('password');

    return <View style={styles.page}>

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
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
    </View>
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 200,
        display: 'flex',
        width: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'white', 
        height: '100%'
    },
});

export default Login;   