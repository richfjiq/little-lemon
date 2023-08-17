import CardDish from './CardDish';
import greekSalad from '../assets/greek salad.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import bruchetta from '../assets/bruchetta.jpg';

const dishes = [
  {
    title: 'Greek salad',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '12.99',
    image: greekSalad,
  },
  {
    title: 'Bruchetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '5.99',
    image: bruchetta,
  },
  {
    title: 'Lemon Dessert',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '5.00',
    image: lemonDessert,
  },
];

const Main = () => {
  return (
    <section className="specials">
      <div className="specials_container">
        <div className="specials_header">
          <h1>This weeks specials!</h1>
          <button aria-label="Link to Menu Page">Online Menu</button>
        </div>
        <div className="specials_card_container">
          {dishes.map(({ title, description, price, image }) => (
            <CardDish
              key={title}
              title={title}
              description={description}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
