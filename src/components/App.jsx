import React, { Component } from 'react';
import Container from './Container';
import { Player } from './Player/Player';
import VideoList from './VideoList/VideoList';
import videos from './videos.json';
import Reader from './Reader/Reader';
import news from './publication.json';

export class App extends Component {
  state = {
    selectVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectVideo: link });
  };

  render() {
    const { selectVideo } = this.state;
    return (
      <>
<Container>
  <Reader news={news}/>
</Container>


        {/* <Container>
          <h1> Select video: {selectVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={selectVideo}/>
        </Container> */}
      </>
    );
  }
}

export default App;
