import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>

      <h2>
        Let's Work Together
      </h2>

      <p>
        Have a project in mind?
      </p>

      <Link to="/contact">
        Contact Me
      </Link>

    </section>
  );
};

export default Contact;