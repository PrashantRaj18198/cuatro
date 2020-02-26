import React, { Component } from 'react';
// import { config } from './config';
// import axios from 'axios';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

const Context = React.createContext();

const reducer = (state, action) => {
//   enter reducers here
};

export class Provider extends Component {
  state = {
    
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
