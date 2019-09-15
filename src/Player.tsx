/**
 * @class PlayerComponent
 */

import * as React from 'react'

export interface IPlayerProps {
  player: IPlayer;
  streamUrl?: string;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface IPlayer {
  on: (event: string, callback: Function) => void;
  play: (prop: { streamUrl: string }) => void;
  stop: () => void;
}

export default class Player extends React.Component<IPlayerProps> {

  componentDidMount() {
    const { player, streamUrl, autoplay } = this.props;
    if (autoplay && streamUrl) {
      player.play({ streamUrl })
    }
  }

  componentDidUpdate(prevProps: IPlayerProps) {
    const { streamUrl, player } = this.props;
    prevProps.streamUrl !== streamUrl && streamUrl ? player.play({ streamUrl }) : player.stop();
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
