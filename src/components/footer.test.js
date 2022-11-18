import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('should render Footercomponent', () => {
  const linkElement = Renderer.create(<Footer />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});