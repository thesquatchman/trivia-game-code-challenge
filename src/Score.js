import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
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
			<ScrollView>
				<View style={styles.backdrop}>
					<Text style={styles.heading}>Score: {score / answered.length * 100}% </Text>

					{answered.map((answer, i) => <AnswerCard key={i} delay={i * 100} answer={answer} />)}

					<TouchableOpacity style={styles.button} onPress={() => this.onPlayAgain()}>
						<Text style={styles.text}>
							Play Again? <Ionicons name="md-play" size={20} color="#fff" />
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#1F2E3B',
		alignItems: 'center'
	},
	button: {
		height: 60,
		backgroundColor: '#03A187',
		marginVertical: 40,
		padding: 15
	},
	text: {
		fontSize: 20,
		color: '#fff'
	},
	heading: {
		fontSize: 20,
		color: '#fff',
		marginVertical: 40
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
