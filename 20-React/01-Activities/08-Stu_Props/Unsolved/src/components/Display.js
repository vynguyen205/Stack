import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div className='d-flex'>
      {/* this is creating the cards dynamically depending on how many objects we passed in to canine */}
      {canine.map(Card)} 
        {/* // TODO: Write logic that will render a Card component for the dog */}
        {/* <Card {...canine} /> */}
        // TODO: Pass `name`, `description`, and `id` to the Card component as props
    </div>
  );
}
