import React, { useContext } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {PostFeed} from 'common';
import { ThemeContext } from 'theme';

import Posts from 'constants/Posts';

const HomeScreen = ({navigation}) => {

    /* console.log(Posts) */

    return (
        <SafeAreaView style={styles.container}>
			<PostFeed posts={Posts} navigation={navigation}/>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

export default HomeScreen;