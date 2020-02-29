import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import CommonScreenProps from '../types/CommonScreenProps';
const Profile = (props: CommonScreenProps) => {
    return <View style={styles.page}>
        <View style={styles.profileImage}></View>
        <Text style={styles.nameText}> Jonathan Marcelino </Text>
        <Text style={styles.emailText}> jmarcelino@ucmerced.edu </Text>
        <Button onPress={() => { }} title="Logout"
        />
    </View>
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 15,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%', 
        backgroundColor: 'white'
    },

    profileImage: {
        backgroundColor: '#ba324f',
        borderColor: '#d62839',
        borderWidth: 5,
        width: 200,
        height: 200,
        borderRadius: 500,
        marginBottom: 30
    },
    nameText: {
        fontSize: 20,
        marginBottom: 5
    },
    emailText: {
        fontSize: 20
    },
    logout: {

    }
});

export default Profile; 