import CardTestimonial from './CardTestimonial';
import jack from '../assets/images/jack_1.jpg';
import laura from '../assets/images/laura_4.jpg';
import michelle from '../assets/images/michelle_2.jpg';
import philipp from '../assets/images/philipp_3.jpg';

const testimonials = [
  {
    name: 'Jack',
    rating: 5,
    image: jack,
    review: 'My favorite restaurant',
  },
  {
    name: 'Michelle',
    rating: 4.5,
    image: michelle,
    review: 'The Greek Salad is awesome.',
  },
  {
    name: 'Philipp',
    rating: 5,
    image: philipp,
    review: 'The best restaurant in the city',
  },
  {
    name: 'Laura',
    rating: 4.5,
    image: laura,
    review: 'A nice place for a special moment.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials_container">
        <h2>Testimonials</h2>
        <div className="testimonials_cards_container">
          {testimonials.map(({ name, rating, image, review }) => (
            <CardTestimonial
              name={name}
              rating={rating}
              image={image}
              review={review}
              key={name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
