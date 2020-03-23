import React from "react";
import {Button} from  "reactstrap";
import "./postStatus.css"
const PostStatus = () => {
    return (
        <div className="btn-group">
            <Button color ='warning'>Все</Button>
            <button type ='button' className='btn btn-warning'>Все</button>
            <button type ='button' className='btn btn-outline-danger'>Понравилось</button>
        </div>
    )
}
export default PostStatus;