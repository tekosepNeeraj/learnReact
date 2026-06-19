import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Hi, I'm Neeraj Chauhan
        </h1>

        <h2>
          React & Node.js Developer
        </h2>

        <p>
          Building scalable web applications
          using React, Node.js and MySQL.
        </p>

        <button>
          View Projects
        </button>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Neeraj"
        />
      </div>

    </section>
  );
};

export default Hero;