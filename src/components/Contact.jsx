import "./Contact.css";
import NavbarFilm from "./Navbar";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <NavbarFilm />
        <h1 className="mt-5">Contact us</h1>
        <p>
          If you have any questions, feedback, or inquiries, feel free to reach
          out to us using the information below.
        </p>
        <div className="contact-info">
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 1234 Movie St, Hollywood, CA</p>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={"user"}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={"userExample@gmail.com"}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={
                  "This is an example message, funcionality is not ready yet!"
                }
              ></textarea>
            </div>
            <button type="submit" disabled>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
