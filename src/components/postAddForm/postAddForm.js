import React from "react";
import './postAddForm.css'
const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={() => onAdd('Hello')}
            >Добавить пост</button>
        </div>
    )
};
export default PostAddForm;