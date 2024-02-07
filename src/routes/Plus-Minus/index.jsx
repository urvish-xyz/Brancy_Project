import React, { Component } from 'react';

export default class PlusMinus extends Component {
  state = {
    count: 0,
  };

  increament = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decreament = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="flex items-center gap-6 pt-32 p-container">
        <button
          type="button"
          className="p-4 bg-green-400 rounded-lg text-7xl"
          onClick={this.increament}
        >
          +
        </button>
        <p>{count}</p>
        <button
          type="button"
          className="p-4 bg-red-400 rounded-lg text-7xl"
          onClick={this.decreament}
        >
          -
        </button>
      </div>
    );
  }
}
