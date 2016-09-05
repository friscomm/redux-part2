import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js';

class UserList extends Component {

  createListItems(){
    return this.props.users.map((user) => {
      return (
        <li
        onClick={() => this.props.selectUser(user)}
        key = {user.id}
        >
        {user.first} {user.last}
        </li>
      );
    });
  }

  render(){
    return(
      <ul>
          {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users,
    activeUser: state.activeUser
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
