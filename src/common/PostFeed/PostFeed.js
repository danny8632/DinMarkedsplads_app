import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';

import { PostWrapper } from 'common';

const PostFeed = ({ posts, navigation }) => {

    if(typeof posts === "undefined" || posts.length === 0)
    {
        return (
            <ScrollView removeClippedSubviews={true}>
                <Text>No post found</Text>
            </ScrollView>
        );
    }
    else
    {
        return (
            <ScrollView removeClippedSubviews={true}>
				{posts.map(x => <PostWrapper key={x.id} post={x} navigation={navigation} />)}
			</ScrollView>
        );
    }
}

export default PostFeed;