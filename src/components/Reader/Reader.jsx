import React, { Component } from 'react'

export class Reader extends Component {
    state = {
        index: 0
    }

changeIndex = (value) => {
    this.setState(state => ({index: state.index + value}))
}

// onPrev = () => {
//     this.setState(state => ({index: state.index - 1}))
// }
// onNext = () => {
//     this.setState(state => ({index: state.index + 1}))
// }


  render() {
    const {news} =this.props;
    const { index } = this.state;
    return (
      <div>
        <section>
            <button type='button' onClick={() => this.changeIndex(-1)}>Next</button>
            <button type='button' onClick={() => this.changeIndex(1)}>Preview</button>
        </section>
        <p>{index+1}/{news.length}</p>
        {news.map(({ id, title, text }) => (
        <article key={id}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
        ))}
      </div>
    )
  }
}

export default Reader
