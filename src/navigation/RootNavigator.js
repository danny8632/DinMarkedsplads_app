import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PostScreen } from 'screens';
import { NAVIGATION_TO_HOME_SCREEN, NAVIGATION_TO_POST_SCREEN } from 'navigation/routes';

import { ThemeContext } from 'theme';

const Stack = createStackNavigator();


const StackNavigator = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: theme.primaryColor },
                headerBackTitle: null,
                headerTintColor: theme.appbar.tintColor,    
            }}>
            <Stack.Screen name={NAVIGATION_TO_HOME_SCREEN} component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name={NAVIGATION_TO_POST_SCREEN} component={PostScreen} options={{ title: "Post" }} />
        </Stack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <NavigationContainer>
            <StatusBar
                barStyle={theme.appbar.barStyle}
                backgroundColor={theme.appbar.statusBarColor}
            />
            <Drawer.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
                <Drawer.Screen name="Drawer" component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;