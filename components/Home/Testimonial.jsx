'use client';

import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO at Company A',
      quote: 'This switchgear solution has been a game changer for our operations. Highly recommend it!',
    },
    {
      name: 'Jane Smith',
      title: 'Operations Manager at Company B',
      quote: 'Reliable, efficient, and safe! The best solution we have implemented in our facility.',
    },
    {
      name: 'Carlos Mendez',
      title: 'Project Lead at Company C',
      quote: 'The customer support has been fantastic, and the performance of the product exceeds expectations.',
    },
    {
      name: 'Emily Johnson',
      title: 'Engineering Director at Company D',
      quote: 'Incredible quality and service. We’ve seen improved efficiency across the board.',
    },
  ];

  return (
    <div>
      <InfiniteMovingCards items={testimonials} />
    </div>
  );
};

export default Testimonial;
