/* import { Link } from "react-router-dom"; */
import "./AboutUs.css";
import NavbarFilm from "./Navbar";

function AboutUs() {
  return (
    <>
      <NavbarFilm />
      <div className="background-aboutUs">
        <div className="about-us-container mt-5">
          <h1>About Our Movie Project</h1>
          <p>
            Welcome to our movie project! We're passionate about movies and
            wanted to create a platform where movie enthusiasts can discover,
            explore, and get information about their favorite films.
          </p>
          <p>
            Our goal is to provide a seamless and enjoyable movie browsing
            experience. We gather movie data using The Movie Database (TMDb) API
            to bring you a vast collection of movies across genres, eras, and
            languages.
          </p>
          <p>
            Feel free to dive in, explore the movies, and get lost in the world
            of cinema. We hope you find this project as exciting and
            entertaining as we do!
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
