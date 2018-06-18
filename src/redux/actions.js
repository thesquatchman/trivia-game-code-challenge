const fetchFailure = error => ({
	type: 'QUESTIONS_FAILURE',
	error
});

const fetchPending = () => ({
	type: 'QUESTIONS_PENDING',
	loading: true
});

const fetchSuccess = questions => ({
	type: 'QUESTIONS_SUCCESS',
	questions
});

const setCurrent = question => ({
	type: 'CURRENT_QUESTION',
	question
});

const recordAnswer = answered => ({
	type: 'RECORD_ANSWER',
	answered
});

const updateScore = score => ({
	type: 'SCORE_ANSWER',
	score
});

const gameOver = () => ({
	type: 'GAME_OVER',
	finished: true
});

export const loadQuestions = () => async dispatch => {
	dispatch(fetchPending());
	fetch('https://opentdb.com/api.php?amount=10&type=boolean&difficulty=hard')
		.then(response => response.json())
		.then(data => {
			if (data.response_code === 0 && data.results.length > 0) {
				const questions = data.results;
				dispatch(fetchSuccess(questions));
				dispatch(setCurrent(questions[0]));
			} else {
				dispatch(fetchFailure('Failed to load Quiz'));
			}
		})
		.catch(() => dispatch(fetchFailure('Failed to load Quiz')));
};

export const submitAnswer = (points, question) => (dispatch, getState) => {
	const { questions, answered, score } = getState().game;

	if (answered.length + 1 < questions.length) {
		dispatch(recordAnswer([...answered, { points, question }]));
		dispatch(updateScore(points + score));
		dispatch(setCurrent(questions[answered.length + 1]));
	} else {
		dispatch(recordAnswer([...answered, { points, question }]));
		dispatch(updateScore(points + score));
		dispatch(gameOver());
	}
};

const initialState = {
	questions: [],
	current: null,
	answered: [],
	score: 0,
	error: null,
	loading: false,
	finished: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'QUESTIONS_PENDING':
			return {
				...state,
				loading: action.loading,
				finished: false
			};
		case 'QUESTIONS_FAILURE':
			return {
				...state,
				err: action.error,
				loading: false
			};
		case 'QUESTIONS_SUCCESS':
			return {
				...state,
				questions: action.questions,
				loading: false,
				answered: [],
				score: 0
			};
		case 'CURRENT_QUESTION':
			return {
				...state,
				current: action.question
			};
		case 'RECORD_ANSWER':
			return {
				...state,
				answered: action.answered
			};
		case 'SCORE_ANSWER':
			return {
				...state,
				score: action.score
			};
		case 'GAME_OVER':
			return {
				...state,
				finished: action.finished
			};
		default:
			return state;
	}
};
