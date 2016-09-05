import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{

  render(){
    if(!this.props.user.thumbnail){
      return(
        <div>Select a User Above to Display Information..</div>
      );
    }
    return(
      <div>
        <img src={this.props.user.thumbnail} className="profPic" />
        <br />
        <h3>{this.props.user.first} {this.props.user.last}</h3>
        <h3>{this.props.user.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.activeUser
  };
}


export default connect(mapStateToProps)(UserDetail);
