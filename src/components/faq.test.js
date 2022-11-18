import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import FAQSection from './FAQSection';
import '@testing-library/jest-dom';

test('should render FAQ component', () => {
  const linkElement = Renderer.create(<FAQSection />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});