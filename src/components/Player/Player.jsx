import React, { Component } from 'react'
import { PlayerWraper, StyledPlayer } from './player.styled';

export class Player extends Component {
  render() {
    const {url} = this.props;
    return (
      <>
      {url && (
        <PlayerWraper>
            <StyledPlayer url={url} controls/>
        </PlayerWraper>
      )}
        
      </>
    )
  }
}

export default Player
