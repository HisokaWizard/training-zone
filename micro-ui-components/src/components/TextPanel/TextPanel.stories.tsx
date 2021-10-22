// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta } from '@storybook/react';

import TextPanel from './TextPanel';

export default {
  component: TextPanel,
  title: 'Components/TextPanel',
} as Meta;

export const BaseTextPanel: React.VFC<{}> = () => <TextPanel title={'12345'} body={'54321'} />;