import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { ThemeContext } from 'theme';

const DetailScreen = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <ScrollView style={styles.container(theme)}>
            <View>
                <Text>DetailScreen boys</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: theme => ({
        flex: 1,
        backgroundColor: theme.backgroundColor,
    }),
});

export default DetailScreen;