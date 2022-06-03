import React, { useEffect } from 'react';
import TextPanel from './components/TextPanel/TextPanel';
import TextPanelWithBackGround from './components/TextPanelWithBackGround/TextPanelWithBackGround';
import { createSharedEvent } from '../../agregator/src/events';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState('');

  window.addEventListener('pupaData', (event: CustomEvent<string>) => {
    if (!event.detail) return;
    setData(event.detail);
  });

  useEffect(() => {
    const event = createSharedEvent('pupa');
    window.dispatchEvent(event);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Components</h1>
      Data: {data}
      <div>
        <TextPanel title={'Title'} body={'Body'} />
      </div>
      <div>
        <TextPanelWithBackGround title={'Title'} body={'Body'} />
      </div>
    </div>
  );
};

export default App;
