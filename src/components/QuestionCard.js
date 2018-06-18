import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import entities from 'entities';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const QuestionCard = ({ question, onScorePoints }) => (
	<Animatable.View animation="zoomInUp" delay={500} style={styles.container}>
		<Text>{question.category}</Text>
		<View>
			<Text>{entities.decodeHTML(question.question)}</Text>
		</View>
		<View style={styles.inputContainer}>
			<TouchableOpacity style={styles.button} onPress={() => onScorePoints('True')}>
				<Text>
					<Ionicons name="md-thumbs-up" size={20} color="#444854" /> True
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => onScorePoints('False')}>
				<Text>
					<Ionicons name="md-thumbs-up" size={20} color="#444854" /> False
				</Text>
			</TouchableOpacity>
		</View>
	</Animatable.View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputContainer: {
		flexDirection: 'row'
	},
	text: {
		fontSize: 20,
		padding: 15,
		color: '#444854'
	},
	button: {
		height: 60,
		backgroundColor: '#FACF5A',
		margin: 5,
		padding: 15
	}
});

export default QuestionCard;
