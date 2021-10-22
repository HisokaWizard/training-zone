// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta } from '@storybook/react';

import TextPanelWithBackGround from './TextPanelWithBackGround';

export default {
  component: TextPanelWithBackGround,
  title: 'Components/TextPanelWithBackGround',
} as Meta;

export const OrangeTextPanel: React.VFC<{}> = () => <TextPanelWithBackGround title={'12345'} body={'54321'} />;