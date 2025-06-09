import React, { Component } from 'react';
import { PlayerWraper, StyledPlayer } from './player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;
    return (
      <>
        {showLoader && <h2>Load video</h2>}
        {url && (
          <PlayerWraper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWraper>
        )}
      </>
    );
  }
}

export default Player;
