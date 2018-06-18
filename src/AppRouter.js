import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Welcome from './Welcome';
import Question from './Question';
import Score from './Score';

const AppRouter = () => (
	<Router>
		<Stack key="root">
			<Scene key="Welcome" component={Welcome} hideNavBar="true" />
			<Scene key="Question" component={Question} hideNavBar="true" />
			<Scene key="Score" component={Score} hideNavBar="true" />
		</Stack>
	</Router>
);

export default AppRouter;
