import React, { Component } from 'react';

class Specialization extends Component{
  render(){
    return (
      <div>
        <img height="150" width="150" src={this.props.banana.image} />
        <h1>{this.props.banana.language}</h1>          
        <h3>{this.props.banana.description}</h3>
      </div>
    );
  }
}

export default Specialization;