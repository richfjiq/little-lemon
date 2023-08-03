import ReactStars from 'react-stars';

const CardTestimonial = ({ name, rating, image, review }) => {
  return (
    <div className="card_testimonial">
      <ReactStars
        edit={false}
        size={18}
        count={5}
        value={rating}
        color1="#DFDFDF"
        color2="#f4ce14"
      />
      <div className="card_testimonial_image">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default CardTestimonial;
