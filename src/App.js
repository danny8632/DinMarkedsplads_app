import React from 'react';
import { Text, useColorScheme, View, Button } from 'react-native';
import { ThemeProvider, lightTheme, darkTheme } from 'theme';
import RootNavigator from 'navigation';

const App = () => {

	const colorScheme = useColorScheme();

	return (
		<ThemeProvider theme={lightTheme}>
			<RootNavigator />
		</ThemeProvider>
	);
};

export default App;
