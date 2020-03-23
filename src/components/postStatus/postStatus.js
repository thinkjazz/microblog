import React from "react";
import "./postStatus.css"
const PostStatus = () => {
    return (
        <div className="btn-group">
            <button type ='button' className='btn btn-warning'>Все</button>
            <button type ='button' className='btn btn-outline-danger'>Понравилось</button>
        </div>
    )
}
export default PostStatus;