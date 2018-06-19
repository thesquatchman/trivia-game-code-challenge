import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const WelcomeMessage = ({ onStartGame }) => (
	<Animatable.View animation="fadeIn" style={styles.container}>
		<Text style={styles.heading}>Welcome to the Trivia Challenge!</Text>
		<Text style={styles.text}>You will be presented with 10 True or False questions.</Text>
		<Text style={styles.text}>Can you score 100%?</Text>
		<TouchableOpacity style={styles.button} onPress={() => onStartGame()}>
			<Text style={styles.text}>
				BEGIN <Ionicons name="md-play" size={20} color="#fff" />
			</Text>
		</TouchableOpacity>
	</Animatable.View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		padding: 15,
		color: '#fff'
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	button: {
		backgroundColor: '#03A187',
		marginBottom: 5,
		padding: 5
	}
});

export default WelcomeMessage;
