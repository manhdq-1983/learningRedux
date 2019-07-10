import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as userActions from '../actions/actions';

class UserApp extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                <Header/>
                {/*<MainSection users={users} />*/}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserApp);
