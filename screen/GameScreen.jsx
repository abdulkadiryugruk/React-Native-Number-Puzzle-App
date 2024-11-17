import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useEffect } from "react";
import Title from "../components/Title";
import { useState } from "react";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import ComputerGuess from "../components/ComputerGuess";

let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCounts, setGuessCounts] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCounts.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      return Alert.alert("şşşşş", "kandirmaaa!!!", [
        { text: "Tüh bee", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCounts((prevGuess) => [newRandomNumber, ...prevGuess]);
  };

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  return (
    <View style={styles.container}>
      <Title>Bilgisayar tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altindami ustunde mi?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={40} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={40} color="white" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessCounts}
          keyExtractor={(itemData) => itemData}
          renderItem={(itemData) => (
            <ComputerGuess roundNumber={guessCounts.length - itemData.index} 
            guess={itemData.item}
            />
          )}
          
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    marginBottom: 15,
  },
  listContainer:{
    flex:1,
    marginTop:10,
  }
});
