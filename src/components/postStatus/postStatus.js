import React, {Component} from "react";
import {Button} from  "reactstrap";
import "./postStatus.css"
export default class PostStatus  extends Component {
    constructor(props) {
        super(props);
        this.button = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }
    render() {
        let buttons = this.button.map(({name, label}) => {
            let { filter, onFilterSelect } = this.props;
            let active = filter === name;
            let activeClassButton = active ? 'btn-danger' : 'btn-outline-primary'
            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${activeClassButton}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}

            </div>
        )
    }
}
