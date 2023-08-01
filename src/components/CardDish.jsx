import { ReactComponent as Delivery } from '../assets/delivery.svg';

const CardDish = ({ title, price, description, image }) => {
  return (
    <div className="card_dish_container">
      <div className="card_dish_img_container">
        <img src={image} alt={title} />
      </div>
      <div className="card_dish_content">
        <div className="card_dish_header">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <div className="card_dish_description">
          <p>{description}</p>
          <div className="card_dish_delivery">
            <h3>Order a delivery</h3>
            <Delivery width={19} height={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDish;
