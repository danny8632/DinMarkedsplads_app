import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';

import PostWrapper from 'common/PostWrapper/PostWrapper';

const PostFeed = ({ posts, navigation }) => {

    console.log(posts)

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