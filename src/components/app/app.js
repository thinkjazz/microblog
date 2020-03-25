import React, {Component} from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatus from "../postStatus";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import "./app.css";

export default class App extends Component {
    constructor(props) {
        super( props );
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'Going to learn Vue', important: false, like: false, id: 2},
                {label: 'Going to learn GraphQL and ApolloClient', important: false, like: false, id: 3},
                {label: 'Going to learn GraphQL', important: true, like: false, id: 4},
                {label: 'Learning JavaScript', important: true, like: false, id: 5},
                {label: 'Learning EcmaScript2020', important: true, like: false, id: 6}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind( this );
        this.addItem = this.addItem.bind( this );
        this.onToggleImportantAndLiked = this.onToggleImportantAndLiked.bind( this );
        // this.onToggleImportant = this.onToggleImportant.bind( this );
        // this.onToggleLiked = this.onToggleLiked.bind( this );
        this.onUpdateSearch = this.onUpdateSearch.bind( this );
        this.onFilterSelect = this.onFilterSelect.bind( this )
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            let index = data.findIndex( elem => elem.id === id );
            let before = data.slice( 0, index );
            let after = data.slice( index + 1 );

            let newArr = [...before, ...after]
            return {
                data: newArr
            }


        } );
    }

    addItem(body) {
        let newItem = {
            label: body,
            important: false,
            id: `id${(+new Date).toString( 16 )}`
            // id: `uid${(~~(Math.random()*1e8)).toString(16)}`;
        }
        this.setState( ({data}) => {
            let newArr = [...data, newItem];
            return {
                data: newArr
            }
        } )

    }
    onToggleImportantAndLiked(id) {
        this.setState( ({data}) => {
            let index = data.findIndex( element => element.id === id );
            let oldIndex = data[index];
            let newItem = {...oldIndex, important: !oldIndex.important, like: !oldIndex.like };

            let newArr = [...data.slice( 0, index ), newItem, ...data.slice( index + 1 )];
            return {data: newArr}
        } )
    }
    // onToggleImportant(id) {
    //     this.setState( ({data}) => {
    //         let index = data.findIndex( element => element.id === id );
    //         let oldIndex = data[index];
    //         let newItem = {...oldIndex, important: !oldIndex.important};
    //
    //         let newArr = [...data.slice( 0, index ), newItem, ...data.slice( index + 1 )];
    //         return {data: newArr}
    //     } )
    // }
    //
    // onToggleLiked(id) {
    //     this.setState( ({data}) => {
    //         let index = data.findIndex( element => element.id === id );
    //         let oldIndex = data[index];
    //         let newItem = {...oldIndex, like: !oldIndex.like};
    //
    //         let newArr = [...data.slice( 0, index ), newItem, ...data.slice( index + 1 )];
    //         return {data: newArr}
    //     } )
    // }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter( (item) => {
            return item.label.indexOf( term ) > -1
        } );
    }
    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onUpdateSearch(term) {
        this.setState( {term} )
    }
    onFilterSelect(filter) {
        this.setState( {filter} )
    }
    render() {
        let {data, term, filter} = this.state;
        let liked = data.filter( item => item.like ).length;
        let allPosts = data.length;

        let visiblePost = this.filterPost(this.searchPost( data, term ), filter);
        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatus
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />

                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleImportantAndLiked={this.onToggleImportantAndLiked}
                    // onToggleImportant={this.onToggleImportant}
                    // onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>


        )
    }

};

