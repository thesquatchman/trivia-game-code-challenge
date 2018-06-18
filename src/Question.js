import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { submitAnswer } from './redux/actions';

import QuestionCard from './components/QuestionCard';

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
			<View style={styles.backdrop}>
				<QuestionCard question={question} onScorePoints={choice => this.scorePoints(choice)} />
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
	backdrop: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#56E3B1',
		alignItems: 'center'
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
