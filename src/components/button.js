import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <div
        id={this.props.sound}
        className='button'
        onClick={this.props.playSound}
      >

        <p>{this.props.sound}</p>

      </div>
    );
  }
}

export default Button;