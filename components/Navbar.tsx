import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = () => {
    return <View style={styles.navbar}>
        <Text> This is a bar </Text>
    </View>
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: '60pt',
        backgroundColor: 'red' 
    },
});


export default NavBar; 