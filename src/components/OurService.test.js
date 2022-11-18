import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurServiceSection from './OurServiceSection';

test('should render Our Service component', () => {
  const linkElement = Renderer.create(<OurServiceSection />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});