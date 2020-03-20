import React from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatus from "../postStatus";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import "./app.css";
let App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className ="search-panel d-flex">
                <SearchPanel/>
                <PostStatus/>

            </div>
            <PostList/>
            <PostAddForm/>
        </div>


    )
};
export default App;
