import React from 'react';
import { StyleSheet, Text } from 'react-native';
import entities from 'entities';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AnswerCard = ({ answer, delay }) => (
	<Animatable.View animation="zoomInUp" delay={delay} style={styles.card}>
		<Text style={styles.text}>{entities.decodeHTML(answer.question.question)}</Text>
		<Text style={styles.textScore}>
			{answer.points === 1 ? (
				<Ionicons name="md-checkmark-circle" size={16} color="#03A187" />
			) : (
				<Ionicons name="md-close-circle" size={16} color="#FF6E6E" />
			)}
			{answer.question.correct_answer}
		</Text>
	</Animatable.View>
);

const styles = StyleSheet.create({
	card: {
		padding: 5,
		width: '100%',
		marginVertical: 10
	},
	text: {
		fontSize: 16,
		color: '#fff'
	},
	textScore: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff'
	}
});

export default AnswerCard;
