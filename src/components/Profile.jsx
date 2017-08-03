import React, { Component } from 'react';

const crazy = true;

class Profile extends Component{
  render(){
    let picture;
    if (crazy){
      picture = "http://www.placecage.com/c/201/300";
    } else {
      picture = "http://www.placecage.com/200/300"
    }
    return (
      <div>
        <img src={picture} />
        <h1>Nic Cage</h1>
        <h3>Full Stack Developer</h3>
      </div>
    );
  }
}

export default Profile;