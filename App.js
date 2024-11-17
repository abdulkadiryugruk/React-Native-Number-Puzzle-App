import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./screen/GameStartScreen";
import GameScreen from "./screen/GameScreen";
import GameOverScreen from "./screen/GameOverScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0);

  const sendedNumberHandler = (sendedNumber) => {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  };

  function gameOverHandler(numberOfGuess){
    setGameIsOver(true);
    setGuessCounts(numberOfGuess)
  }
  
  function startNewGameHandler(){
    setGameIsOver(false);
    setGuessCounts(0);
    setUserNumber(null);
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessCounts} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.container}
        imageStyle={styles.backImage}
        source={require("./assets/back.jpg")}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.6,
  },
});

export default App;
