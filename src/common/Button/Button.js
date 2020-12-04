import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';

import { ThemeContext } from 'theme';

const Button = ({ title, onPress, style }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<TouchableOpacity onPress={onPress} style={[styles.appButtonContainer(theme), style]}>
			<Text style={styles.appButtonText}>{title}</Text>
		</TouchableOpacity>
	);
};


export default Button;


const styles = StyleSheet.create({
	appButtonContainer: theme => ({
		elevation: 8,
		backgroundColor: theme.primaryColor,
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 12
	}),
	appButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		textTransform: "uppercase"
	}
});

/* Button.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: ViewPropTypes.style,
}

Button.defaultProps = {
	onPress: () => {},
	style: {},
}; */