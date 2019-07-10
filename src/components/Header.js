import React, {Component} from 'react'
import PropTypes from 'prop-types';
import autoBind from 'react-autobind'
import * as userActions from "../actions/actions";
import {connect} from "react-redux";

class User extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    render() {
        return(
            <h5
                className="d-flex col-5">
                <span className="col-2" >NO: {this.props.user.id}</span>
                <span className="col-5" >Name: {this.props.user.name}</span>
                <span className="col-2" >AGE:{this.props.user.age}</span>
            </h5>
        )
    }
}

class Header extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
        };
        autoBind(this);
    }

    handleChange = (event) => {
        const input = event.target.value;
        const name = event.target.name;
        if (this.props.addUser) {
            this.setState({
                [name]: input
            })
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const value = {
            name: this.state.name,
            age: this.state.age
        };
        this.props.addUser(value);
    };

    render() {
        const { users } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                {/*<h1>{this.state.name ? 'Hello ' + this.state.name : ''}</h1>*/}
                <label htmlFor="">Enter name:</label>
                <input
                    className="form-control w-50"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder='What is your name?'
                /><br/>
                <label htmlFor="">Enter age:</label>
                <input
                    className="form-control w-50"
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder='How old are you?'
                /><br/>
                <input
                    className="btn btn-info mb-3"
                    type="submit"/>
                { users.map(function(item, i){
                    return <User key={i} user={item}/>
                })}
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userReducers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: (value) => dispatch(userActions.addUser(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
