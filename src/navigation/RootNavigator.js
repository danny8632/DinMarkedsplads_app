import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PostScreen, SearchScreen, LoginScreen } from 'screens';
import { NAVIGATION_TO_HOME_SCREEN, NAVIGATION_TO_POST_SCREEN, NAVIGATION_TO_SEARCH_SCREEN, NAVIGATION_TO_LOGIN_SCREEN } from 'navigation/routes';

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


const LoginStack = createStackNavigator();

const LoginNavigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <LoginStack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: theme.primaryColor },
                headerBackTitle: null,
                headerTintColor: theme.appbar.tintColor 
            }
        }>
            <Stack.Screen name={NAVIGATION_TO_LOGIN_SCREEN} component={LoginScreen} options={{ title: "Login" }} />
        </LoginStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <NavigationContainer>
            <StatusBar
                barStyle={theme.appbar.barStyle}
                backgroundColor={theme.appbar.statusBarColor}
            />
            <Tab.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
                <Tab.Screen name="Home" component={StackNavigator} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Login" component={LoginNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;