import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Cell = ({ letter }: { letter: string }) => {
    return <View style={styles.cell}>
        <Text>{`cell ${letter}`}</Text>
    </View>
}

const Home = () => {
    const [clicks, setClicks] = useState(0);
    return <View style={styles.page}>
        <Text>
            Home Page {clicks}
        </Text>
        {['a', 'b', 'c'].map((cell, i) => <Cell key={i} letter={cell}/>)}

        <Button title='button' onPress={() => {
            setClicks(clicks + 1)
        }} />
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
    cell: {
        height: 40
    }

});
export default Home; 