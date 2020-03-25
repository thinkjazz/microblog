import React from "react";
import PostListItem from  "../postListItem";
import { ListGroup } from 'reactstrap';
import './postList.css'
const PostList = ({posts, onDelete}) => {

    let  postElements = posts.map((post) => {
        let {id, ...postProps} = post;
        return (
            <li key ={id} className='list-group-item'>
                <PostListItem {...postProps}
                    onDelete={()=>onDelete(id)}
                />
            </li>
        )
    });
    return (
        <ListGroup className="app-list">
            {postElements}
        </ListGroup>
    )
}
export default PostList;