import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import entities from 'entities';
import { connect } from 'react-redux';
import { submitAnswer } from './redux/actions';

class Question extends React.Component {
	componentWillUpdate(nextProps) {
		if (nextProps.finished) {
			Actions.Score();
		}
	}

	scorePoints(choice) {
		if (this.props.question.correct_answer === choice) {
			this.props.submitAnswer(1, this.props.question);
		} else {
			this.props.submitAnswer(0, this.props.question);
		}
	}

	render() {
		const { questions, question, answered } = this.props;
		return (
			<View style={styles.container}>
				<Text>{question.category}</Text>
				<View>
					<Text>{entities.decodeHTML(question.question)}</Text>
				</View>
				<View>
					<TouchableOpacity style={styles.item} onPress={() => this.scorePoints('True')}>
						<Text>True</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this.scorePoints('False')}>
						<Text>False</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Text>
						{answered.length + 1} of {questions.length}
					</Text>
				</View>
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
	item: {
		backgroundColor: 'whitesmoke',
		marginBottom: 5,
		padding: 15
	}
});

const mapStateToProps = state => ({
	questions: state.game.questions,
	answered: state.game.answered,
	question: state.game.current,
	finished: state.game.finished
});

const mapDispatchToProps = dispatch => ({
	submitAnswer: (points, question) => {
		dispatch(submitAnswer(points, question));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
