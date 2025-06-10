import React from 'react';
function Publication({ news }) {
  return (
    <article>
      <h2>{news.title}</h2>
      <p>{news.text}</p>
    </article>
  );
}

export default Publication;
