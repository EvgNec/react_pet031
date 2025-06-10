import Controls from 'components/Reader/Controls/Controls';
import React, { Component } from 'react';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

 componentDidMount(prevProps, prevState){
  const saverState = localStorage.getItem(LS_KEY)
  if (saverState) {
    this.setState({ index: Number(saverState) });
  }
 }

  componentDidUpdate(prevProps, prevState){
if (prevState.index!==this.state.index){
  localStorage.setItem(LS_KEY, this.state.index);
}
  }

  // onPrev = () => {
  //     this.setState(state => ({index: state.index - 1}))
  // }
  // onNext = () => {
  //     this.setState(state => ({index: state.index + 1}))
  // }

  render() {
    const { news } = this.props;
    const totalNews = news.length;
    const currentItem = this.props.news[this.state.index];
    const { index } = this.state;
    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          currentNews={index + 1}
          totalNews={totalNews}
        />
        <Progress currentNews={index + 1} totalNews={totalNews} />
        <Publication news={currentItem} />
      </div>
    );
  }
}

export default Reader;
