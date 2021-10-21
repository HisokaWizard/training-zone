import React from 'react';
import {ErrorBoundary} from "./ErrorBoundary";

// @ts-ignore
const TextPanel = React.lazy(() => import('MFEUI/TextPanel'));
// @ts-ignore
const TextPanelWithBackGround = React.lazy(() => import('MFEUI/TextPanelWithBackGround'));

export const StartPage = () => {
  return <div>
    <h1>Start Page</h1>
    <React.Suspense fallback='Loading...'>
      <div>Content from micro-frontends!</div>
      <ErrorBoundary>
        <TextPanel title={'123434'} body={'2345432'} />
        <TextPanelWithBackGround title={'123434'} body={'2345432'} />
      </ErrorBoundary>
    </React.Suspense>
  </div>
}