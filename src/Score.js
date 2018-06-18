import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loadQuestions } from './redux/actions';
import AnswerCard from './components/AnswerCard';

class Score extends React.Component {
	onPlayAgain() {
		this.props.loadQuestions();
		Actions.Question();
	}

	render() {
		const { score, answered } = this.props;
		return (
			<View style={styles.backdrop}>
				<Text>Score: {score / answered.length * 100}% </Text>
				{answered.map((answer, i) => <AnswerCard key={i} delay={i * 100} answer={answer} />)}
				<TouchableOpacity style={styles.button} onPress={() => this.onPlayAgain()}>
					<Text>Play Again?</Text>
				</TouchableOpacity>
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
	},
	button: {
		height: 60,
		backgroundColor: '#FACF5A',
		margin: 5,
		padding: 15
	},
	text: {
		fontSize: 20,
		padding: 15,
		color: '#444854'
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
