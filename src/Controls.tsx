import * as React from 'react';
import { IPlayer } from './Player';

export interface IControls {
  player: IPlayer;
  onPlay: () => void;
}

interface IState {
  play: string;
}

export default class Controls extends React.Component<IControls, IState> {
  state: IState = {
    play: 'False'
  }
  componentDidMount() {
    this.props.player.on('play', () => {
      this.setState({ play: 'False' })
    });

    this.props.player.on('pause', () => {
      this.setState({ play: 'True' })
    })
  }

  componentWillUnmount() {
    this.props.player.off('play', () => {
      console.log('unbind play');
    })
  }
  render() {
    if (!this.state.play) {
      return <div />;
    }
    return (
      <div className="playpause">
        <input type="checkbox" value={this.state.play} id="playPauseCheckbox" name="playPauseCheckbox" />
        <label htmlFor="playPauseCheckbox"></label>
      </div>

    );
  }
}