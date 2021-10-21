import React from 'react';

const TextPanel = ({title, body}: {title: string, body: string}) => {
  return <div>
    <h3>{title}</h3>
    <br />
    <p>{body}</p>
  </div>
}

export default TextPanel;