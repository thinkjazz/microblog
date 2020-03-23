import React from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatus from "../postStatus";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import "./app.css";
let App = () => {
    let data = [
        {label: 'Going to learn React', important: true, id: 'fff'},
        {label: 'Going to learn Vue', important: false, id: 2},
        {label: 'Going to learn GraphQL and ApolloClient', important: false, id: 3},
        {label: 'Going to learn GraphQL', important: true, id: 4},
        {label: 'Learning JavaScript', important: true , id: 5}
    ];
    return (
        <div className="app">
            <AppHeader/>
            <div className ="search-panel d-flex">
                <SearchPanel/>
                <PostStatus/>

            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>


    )
};
export default App;
