import React from "react";
import PostListItem from  "../postListItem";
import './postList.css'
const PostList = ({posts}) => {

    let  postElements = posts.map((post) => {
        let {id, ...postProps} = post;
        return (
            <li key ={id} className='list-group-item'>
                <PostListItem {...postProps} />
            </li>
        )
    });
    return (
        <ul className="app-list list-group">
            {postElements}
        </ul>
    )
}
export default PostList;