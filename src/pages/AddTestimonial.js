import React from 'react';
import './AddTestimonial.css';

const AddTestimonial = () => {
  return (
    <div className="add-testimonial">
      <h2>Add a Testimonial</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Testimonial:</label>
        <textarea name="testimonial" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTestimonial;
