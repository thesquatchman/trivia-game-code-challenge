import React from 'react';
import { StyleSheet, Text } from 'react-native';
import entities from 'entities';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AnswerCard = ({ answer, delay }) => (
	<Animatable.View animation="zoomInUp" delay={delay} style={styles.container}>
		{answer.points === 1 ? (
			<Text style={styles.right}>
				<Ionicons name="md-checkmark-circle" size={20} color="#444854" />
				{entities.decodeHTML(answer.question.question)} - {answer.question.correct_answer}
			</Text>
		) : (
			<Text style={styles.wrong}>
				<Ionicons name="md-close-circle" size={20} color="#444854" />
				{entities.decodeHTML(answer.question.question)} - {answer.question.correct_answer}
			</Text>
		)}
	</Animatable.View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	},
	text: {
		fontSize: 20,
		padding: 15,
		color: '#444854'
	},
	right: {
		backgroundColor: 'lightgreen'
	},
	wrong: {
		backgroundColor: 'pink'
	}
});

export default AnswerCard;
