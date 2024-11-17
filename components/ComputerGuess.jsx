import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComputerGuess = ({roundNumber, guess}) => {
  return (
	<View style={styles.listItem}>
	  <Text>{roundNumber}-</Text>
	  <Text>{guess}</Text>
	</View>
  )
}

export default ComputerGuess

const styles = StyleSheet.create({
	listItem:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth:1,
		borderRadius:30,
		borderColor: '#ccc',
		padding: 15,
		marginVertical: 10,
		elevation: 5,
		shadowRadius: 6,
		backgroundColor:'lightgrey',
		fontSize:20,
		
	}
})