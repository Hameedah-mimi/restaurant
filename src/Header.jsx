import Carousel from "react-bootstrap/Carousel";
import kitchen from "./assets/Image_fx.png";
import Daytime from "./assets/restaurant4.jpg";
import Dinner from "./assets/restaurant1.jpg";

function Header() {
  return (
    <div>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <div className="carousel-wrapper">
            <div>
              <img
                className="header-images d-block w-100"
                src={kitchen}
                alt="First slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Welcome to Mimi's restaurant</h1>
              <p className="p">Whera delicious meals are made with love</p>
              <button className="header-button">
                {" "}
                <a href="/Menu">View Menu</a>{" "}
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={Daytime}
                alt="Second slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Fresh & Tasty</h1>
              <p className="p">
                Dishes made with top tier ingredents and careful hands
              </p>
              <button className="header-button">
                <a href="/reservation">Reserve a table</a>
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={Dinner}
                alt="Third slide"
              />
            </div>
            <div className="overlay"></div>

            <Carousel.Caption>
              <h1 className="h1">Quality you can trust</h1>
              <p className="p">Every dish is made to perfection</p>
              <button className="header-button">
                {" "}
                <a href="/contact">Contact now</a>{" "}
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
