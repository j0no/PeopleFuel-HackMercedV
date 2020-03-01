
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button, DatePickerIOS } from "react-native";

const InputStyle = {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
};

const AddItemModal = ({ navigation }: { navigation: any }) => {
    const [chosenDate, setDate] = useState(new Date);
    return <View style={styles.page}>
        <View style={styles.inputs}>
            <Text style={styles.labelText}>Name of Item</Text>
            <TextInput style={InputStyle} />
            <Text style={styles.labelText}>Name of Item</Text>
            <TextInput style={InputStyle} />
            <Text style={styles.labelText}>Name of Item</Text>
            <TextInput style={InputStyle} />

            <DatePickerIOS
                date={chosenDate}
                onDateChange={setDate}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Cancel' onPress={() => navigation.goBack()} />
            <View style={styles.gap} />
            <Button title='Save' onPress={() => { }} />
            <View style={styles.gap} />
        </View>
    </View>
}


const styles = StyleSheet.create({
    page: {
        paddingTop: 30,
        display: 'flex',
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'white',
    },
    inputs: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    labelText: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10
    },
    buttonContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingLeft: 15,
        paddingRight: 15,
    },
    gap: {
        marginBottom: 12
    }
})
export default AddItemModal
