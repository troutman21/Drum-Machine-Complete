import React,   { Component } from 'react';
import Button from './button.js';
import Sounds from '../assets/sounds.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sounds: Object.keys(Sounds)
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(e) {
    const sound = e.currentTarget.id
    Sounds[sound].currentTime = 0;
    Sounds[sound].play();
  }

  render(){
    const buttons = [];
    for(let i = 0; i < this.state.sounds.length; i++){
      buttons.push(
        <Button
          key={i}
          sound={this.state.sounds[i]}
          playSound={this.playSound}
        />
      );
    }
    return (
      <div className='button-container'>
        {buttons}
      </div>
    );
  }
}

export default App;