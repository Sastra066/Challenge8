import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialSection from './TestimonialSection';

test('should render Testimonial component', () => {
  const linkElement = Renderer.create(<TestimonialSection />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});