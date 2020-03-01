import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import CommonScreenProps from '../types/CommonScreenProps';

const imagesArr = [require('../assets/profile1.png'), require('../assets/profile2.png'), require('../assets/profile3.png'), require('../assets/profile4.png')];
const Profile = ({ navigation }: { navigation: any }) => {
    const ProfileImage = imagesArr[0];
    return <View style={styles.page}>
        <Image style={styles.profileImage} source={ProfileImage} />
        <Text style={styles.nameText}> Jonathan Marcelino </Text>
        <Text style={styles.emailText}> jmarcelino@ucmerced.edu </Text>
        <Button onPress={() => navigation.navigate('Login')} title="Logout" />
    </View>
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white'
    },
    profileImage: {
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
        fontSize: 20,
        marginBottom: 5
    },
    logout: {

    }
});

export default Profile; 