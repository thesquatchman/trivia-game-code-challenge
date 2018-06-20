import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loadQuestions } from './redux/actions';
import WelcomeMessage from './components/WelcomeMessage';

const startGame = () => {
	Actions.Question();
};

class Welcome extends React.Component {
	componentDidMount() {
		this.props.loadQuestions();
	}

	render() {
		return this.props.questions.length > 0 ? (
			<View style={styles.backdrop}>
				<WelcomeMessage onStartGame={() => startGame()} />
			</View>
		) : (
			<View style={styles.backdrop}>
				<Text style={styles.text}>Loading</Text>
			</View>
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
	text: {
		fontSize: 20,
		padding: 15,
		color: '#fff'
	}
});
const mapStateToProps = state => ({
	questions: state.game.questions || []
});

const mapDispatchToProps = dispatch => ({
	loadQuestions: () => {
		dispatch(loadQuestions());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
