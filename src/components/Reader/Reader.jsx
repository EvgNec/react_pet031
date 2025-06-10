import React, { Component } from 'react'

export class Reader extends Component {
    state = {
        publicationIndex: 0
    }
  render() {
    const {news} =this.props;
    return (
      <div>
        <section>
            <button type='button'>Next</button>
            <button type='button'>Preview</button>
        </section>
        <p>1/10</p>
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
