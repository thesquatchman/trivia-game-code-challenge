import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import entities from 'entities';
import { connect } from 'react-redux';
import { loadQuestions } from './redux/actions';

class Score extends React.Component {
	onPlayAgain() {
		this.props.loadQuestions();
		Actions.Question();
	}

	render() {
		const { score, answered } = this.props;
		return (
			<View style={styles.container}>
				<Text>Score: {score / answered.length * 100}% </Text>
				{answered.length > 0 &&
					answered.map((answer, i) => (
						<View key={i}>
							{answer.points === 1 ? (
								<Text style={styles.right}>
									{entities.decodeHTML(answer.question.question)} - {answer.question.correct_answer}
								</Text>
							) : (
								<Text style={styles.wrong}>
									{entities.decodeHTML(answer.question.question)} - {answer.question.correct_answer}
								</Text>
							)}
						</View>
					))}
				<TouchableOpacity style={styles.item} onPress={() => this.onPlayAgain()}>
					<Text>Play Again?</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	right: {
		backgroundColor: 'lightgreen',
		padding: 5
	},
	wrong: {
		backgroundColor: 'pink',
		padding: 5
	}
});

const mapStateToProps = state => ({
	answered: state.game.answered,
	score: state.game.score
});

const mapDispatchToProps = dispatch => ({
	loadQuestions: () => {
		dispatch(loadQuestions());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
