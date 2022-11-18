import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GettingStartSection from './GettingStartSection';

test('should render Getting Started component', () => {
  const linkElement = Renderer.create(<GettingStartSection />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});