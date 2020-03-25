import React, {Component} from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatus from "../postStatus";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import "./app.css";

import styled from "styled-components";

let AppBlock = styled.div`
      margin: 60px auto;
      max-width: 800px;
`;


export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data:  [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'Going to learn Vue', important: false, id: 2},
                {label: 'Going to learn GraphQL and ApolloClient', important: false, id: 3},
                {label: 'Going to learn GraphQL', important: true, id: 4},
                {label: 'Learning JavaScript', important: true , id: 5},
                {label: 'Learning EcmaScript2020', important: true , id: 6}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);





    }
    deleteItem(id) {
        this.setState(({data})=>{
           let index = data.findIndex(elem => elem.id === id);
           let before = data.slice(0, index);
           let after = data.slice(index + 1);

           let newArr = [...before, ...after]
            return {
               data: newArr
            }



        });
    }
    addItem(body) {
       let newItem = {
           label: body,
           important: false,
           id: `id${(+new Date).toString(16)}`
           // id: `uid${(~~(Math.random()*1e8)).toString(16)}`;
       }
       this.setState(({data}) =>{
           let newArr = [...data, newItem];
           return {
               data: newArr
           }
       })

    }
    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className ="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatus/>

                </div>
                <PostList posts = {this.state.data}
                          onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}
                />
            </AppBlock>


        )
    }

};

