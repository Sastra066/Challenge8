import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhyUsSection from './WhyUsSection';

test('should render Why Us component', () => {
  const linkElement = Renderer.create(<WhyUsSection />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});