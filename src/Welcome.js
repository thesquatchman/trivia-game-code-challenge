import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loadQuestions } from './redux/actions';

class Welcome extends React.Component {
	componentDidMount() {
		this.props.loadQuestions();
	}
	render() {
		const { questions } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Welcome to the Trivia Challenge!</Text>
				<Text style={styles.text}>You will be presented with 10 True or False questions.</Text>
				<Text style={styles.text}>Can you score 100%?</Text>
				{questions.length > 0 ? (
					<TouchableOpacity style={styles.button} onPress={() => Actions.Question()}>
						<Text style={styles.text}>BEGIN</Text>
					</TouchableOpacity>
				) : (
					<Text style={styles.loading}>...Loading...</Text>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor: 'white',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		padding: 15
	},
	loading: {
		fontSize: 24,
		padding: 15,
		color: 'whitesmoke'
	},
	button: {
		backgroundColor: 'whitesmoke',
		marginBottom: 5,
		padding: 15
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
