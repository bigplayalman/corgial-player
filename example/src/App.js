import React, { Component } from 'react'

import CorgialPlayer, { Player } from 'corgial-player'

export default class App extends Component {
  player = new CorgialPlayer();
  streamUrl = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bb/Test_ogg_mp3_48kbps.wav/Test_ogg_mp3_48kbps.wav.ogg';
  render() {
    return (
      <div>
        <Player
          player={this.player}
          streamUrl={this.streamUrl}
          autoplay={true}
        />
      </div>
    )
  }
}
