import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';

const Button = ({ title, onPress, style }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, style]}>
			<Text style={styles.appButtonText}>{title}</Text>
		</TouchableOpacity>
	);
};


export default Button;


const styles = StyleSheet.create({
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
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