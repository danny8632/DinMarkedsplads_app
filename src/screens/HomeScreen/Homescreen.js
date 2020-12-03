import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View, Switch, Text } from 'react-native';
import Button from 'common/Button';
import { ThemeContext } from 'theme';
import { NAVIGATION_TO_DETAIL_SCREEN } from 'navigation/routes';

const HomeScreen = ({navigation}) => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <ScrollView>
            <View>
                <Text>gang gang</Text>

                <Button title="Details gang gang" onPress={() => navigation.navigate(NAVIGATION_TO_DETAIL_SCREEN)} />

                <Text>We made it boys</Text>
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

export default HomeScreen;