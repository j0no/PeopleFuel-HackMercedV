import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Cell = ({ letter }: { letter: string }) => {
  return (
    <View style={styles.cell}>
      <Text>{`cell ${letter}`}</Text>
    </View>
  );
};

const Home = () => {
  const [clicks, setClicks] = useState(0);
  const [fridgeFood, setFoodNum] = useState(0);
  return (
    <View>
      <View style={styles.page}>
        <Text>
          Home Page {clicks} AHHHHHHH I'M JESSICA!!!{" "}
          {"\nNumber of food in fridge:"} {fridgeFood}
        </Text>
        {["a", "b", "c"].map((cell, i) => (
          <Cell key={i} letter={cell} />
        ))}

        <Button
          title="button"
          onPress={() => {
            setClicks(clicks + 1);
          }}
        />
      </View>

      <View style={styles.addFood}>
        <Button
          title="button"
          onPress={() => {
            setFoodNum(fridgeFood + 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    backgroundColor: "white"
  },
  cell: {
    height: 40
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
