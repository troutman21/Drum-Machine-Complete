import React, { Component } from 'react';
import Sounds from '../assets/sounds';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sounds: Object.keys(Sounds),
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    // code to be run when click event is fired goes below this line!
    console.log('eventObj', eventObj.currentTarget.id);
    const soundToPlay = eventObj.currentTarget.id;
    Sounds[soundToPlay].currentTime = 0;
    Sounds[soundToPlay].play();
  }

  render() {
    const buttons = [];
    for (let i = 0; i < this.state.sounds.length; i++) {
      buttons.push(
        <Button
          sound={this.state.sounds[i]}
          playSound={this.playSound}
          key={`button${i}`}
        />
      );
    }
    return (
      <div className="button-container">
        {/* Components that need to be returned from App go below here ! */}
        {buttons}
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div
        // Add additional attributes here
        className="button"
        onClick={this.props.playSound}
        id={this.props.sound}
      >
        <p>{this.props.sound}</p>
      </div>
    );
  }
}

export default App;
