import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

const Cell = ({ item }: {
  item: {
    name: string,
    type: string,
    dueDate: string,
    email: string
  }
}) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.cellText}>{`${item.name}`}</Text>
    </View>
  );
};

const items = [
  {
    name: 'Log Your Food',
    type: 'vegetable',
    dueDate: '2020-02-29',
    email: 'jmarcelsw@gmail.com'
  },
  {
    name: 'Recipes',
    type: 'vegetable',
    dueDate: '2020-02-29',
    email: 'jmarcelsw@gmail.com'
  },
  {
    name: 'Post Your Creation',
    type: 'vegetable',
    dueDate: '2020-02-29',
    email: 'jmarcelsw@gmail.com'
  },
  {
    name: 'Food Storage Tips',
    type: 'vegetable',
    dueDate: '2020-02-29',
    email: 'jmarcelsw@gmail.com'
  },
]

const Home = ({ navigation }: { navigation: any }) => {
  const [clicks, setClicks] = useState(0);
  const [fridgeFood, setFoodNum] = useState(0);
  return (
    <View>
      <View style={styles.page}>
        {items.map((item, i) => (
          <Cell key={i} item={item} />
        ))}
      </View>

      <View style={styles.addFood}>
        <Button
          title="+ FOOD"
          onPress={() => {
            navigation.navigate('MyModal')
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    backgroundColor: "white"
  },
  cell: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'lightgreen',
    marginBottom: 4
  },
  cellText: {
    fontSize: 15,


  },
  addFood: {
    flex: 1,
    // backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    width: "100%",
    paddingRight: 20,
    bottom: 55
  }
});
export default Home;
