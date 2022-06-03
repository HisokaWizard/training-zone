import { handlerSharedEvent } from './events';
import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

// // @ts-ignore
// const TextPanel = React.lazy(() => import('MFEUI/TextPanel'));
// // @ts-ignore
// const TextPanelWithBackGround = React.lazy(() => import('MFEUI/TextPanelWithBackGround'));
// @ts-ignore
const MFApp = React.lazy(() => import('MFEUI/MFApp'));

export const StartPage = () => {
  const [data, setData] = useState('');

  window.addEventListener('pupa', () => {
    setData('pupa trigger event');
  });

  useEffect(() => {
    if (!data) return;
    handlerSharedEvent('pupa', data);
  }, [data]);

  return (
    <div>
      <h1>Start Page</h1>
      <React.Suspense fallback='Loading...'>
        <div>Content from micro-frontends!</div>
        <ErrorBoundary>
          <MFApp />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};
