import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>"This is a testimonial message."</p>
        <p>- Name</p>
      </div>
      <div className="testimonial">
        <p>"This is another testimonial message."</p>
        <p>- Name</p>
      </div>
    </div>
  );
}

export default Testimonials;
