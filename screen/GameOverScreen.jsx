import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>
        <Text>Oyun Tamamlandi!!</Text>
      </Title>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}> {roundsNumber} </Text>
        denemeyle
        <Text style={styles.countAndNumber}> {userNumber} </Text>
        sayisini buldun
      </Text>
      <View style={styles.newGameButon}>
        <CustomButton onPress={onStartNewGame}>Yeni Oyuna Basla</CustomButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: 350,
    height: 350,
    overflow: "hidden",
    borderRadius: 175,
    borderWidth: 3,
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "lightgrey",
    padding: 10,
    marginBottom: 20,
  },
  countAndNumber: {
    color: "red",
  },
  newGameButon: {
    backgroundColor: "green",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
});
