import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import entities from 'entities';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const QuestionCard = ({ question, onScorePoints }) => (
	<Animatable.View animation="zoomInUp" delay={500} style={styles.container}>
		<Text style={styles.heading}>{question.category}</Text>
		<View style={styles.questionBox}>
			<Text style={styles.text}>{entities.decodeHTML(question.question)}</Text>
		</View>
		<View style={styles.inputContainer}>
			<TouchableOpacity style={styles.button} onPress={() => onScorePoints('True')}>
				<Text style={styles.text}>
					<Ionicons name="md-thumbs-up" size={20} color="#fff" /> True
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => onScorePoints('False')}>
				<Text style={styles.text}>
					<Ionicons name="md-thumbs-down" size={20} color="#fff" /> False
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
		color: '#fff'
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	questionBox: {
		padding: 10,
		marginHorizontal: 15,
		marginVertical: 30,
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1
	},
	button: {
		height: 60,
		backgroundColor: '#03A187',
		margin: 5,
		padding: 15
	}
});

export default QuestionCard;
