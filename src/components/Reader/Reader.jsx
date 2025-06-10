import React, { Component } from 'react';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

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
        <section>
          <button 
          type="button" 
          disabled={index === 0}
          onClick={() => this.changeIndex(-1)}>
            Next
          </button>
          <button 
          type="button" 
          disabled={index === totalNews-1}
          onClick={() => this.changeIndex(1)}>
            Preview
          </button>
        </section>
        <p>
          {index + 1}/{totalNews}
        </p>

        <article key={currentItem.id}>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}

export default Reader;
