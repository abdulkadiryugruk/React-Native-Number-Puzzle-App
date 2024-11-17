import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

const GameStartScreen = ({onPress, onSendNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState("");


  const confirmHandler = ()=>{
    const chosenNumber = parseInt(enteredNumber)
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('gecersiz sayi!' , 'sayi 1 ile 99 arasinda olmalidir' , [{text: 'Tamam' , style:'destructive', onPress:resetHandler}])
      return;
    }
    onSendNumber(chosenNumber)
  }


  const resetHandler = () => {
    setEnteredNumber("");
  };

  const numberHandler = (text) => {
    setEnteredNumber(text);
  };

  return (
    <View style={styles.container}>
      <Title>Sayi Tahmin Uygulamasi</Title>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>Temizle</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "orange",
    borderRadius: 10,
    elevation: 5,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    height: 50,
    width: 50,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
  },
});
