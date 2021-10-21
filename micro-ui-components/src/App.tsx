import React from 'react';
import TextPanel from "./components/TextPanel/TextPanel";
import TextPanelWithBackGround from "./components/TextPanelWithBackGround/TextPanelWithBackGround";

const App = () => {
  return <div>
    <h1>Components</h1>
    <div><TextPanel title={'Title'} body={'Body'} /></div>
    <div><TextPanelWithBackGround title={'Title'} body={'Body'} /></div>
  </div>
}

export default App;