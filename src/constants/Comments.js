import Posts from './Posts';

const Comments = [{
    id : 1,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 2,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool"
},{
    id : 3,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "testinng los comment"
},{
    id : 4,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 5,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "Ayyy cool"
},{
    id : 6,
    postId : 2,
    username : Posts.find(x => x.id === 2).username,
    text : "testinng los comment"
},{
    id : 7,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool ma maaaaan"
},{
    id : 8,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "Ayyy cool"
},{
    id : 9,
    postId : 1,
    username : Posts.find(x => x.id === 1).username,
    text : "testinng los comment"
}]

export default Comments;