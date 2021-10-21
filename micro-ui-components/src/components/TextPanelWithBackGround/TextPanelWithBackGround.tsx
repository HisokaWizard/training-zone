import React from 'react';

const TextPanelWithBackGround = ({title, body}: {title: string, body: string}) => {
  return <div style={{backgroundColor: 'orange'}}>
    <h3>{title}</h3>
    <br />
    <p>{body}</p>
  </div>
}

export default TextPanelWithBackGround;