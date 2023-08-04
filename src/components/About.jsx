import aboutA from '../assets/about_a.jpg';
import aboutB from '../assets/about_b.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_left_container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="about_right_container">
          <img className="about_image_a" src={aboutA} alt="Restaurant" />
          <img className="about_image_b" src={aboutB} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
};

export default About;
