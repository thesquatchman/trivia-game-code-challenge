import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const WelcomeMessage = ({ onStartGame }) => (
	<Animatable.View animation="fadeIn" style={styles.container}>
		<Text style={styles.text}>Welcome to the Trivia Challenge!</Text>
		<Text style={styles.text}>You will be presented with 10 True or False questions.</Text>
		<Text style={styles.text}>Can you score 100%?</Text>
		<TouchableOpacity style={styles.button} onPress={() => onStartGame()}>
			<Text style={styles.text}>
				BEGIN <Ionicons name="md-play" size={20} color="#444854" />
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
		color: '#444854'
	},
	loading: {
		fontSize: 20,
		padding: 15,
		color: 'whitesmoke'
	},
	button: {
		backgroundColor: '#FACF5A',
		marginBottom: 5,
		padding: 15
	}
});

export default WelcomeMessage;
