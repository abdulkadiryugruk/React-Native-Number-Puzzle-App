import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
	title:{
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 20,
		borderWidth:2,
		borderColor:'red',
		textAlign:'center',
		borderRadius:20,
		padding:10
	}
})