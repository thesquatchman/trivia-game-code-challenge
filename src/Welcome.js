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
		const { questions } = this.props;
		return questions.length > 0 ? (
			<View style={styles.backdrop}>
				<WelcomeMessage onStartGame={() => startGame()} />
			</View>
		) : (
			<View style={styles.backdrop}>
				<Text>Loading</Text>
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
	questions: state.game.questions || []
});

const mapDispatchToProps = dispatch => ({
	loadQuestions: () => {
		dispatch(loadQuestions());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
