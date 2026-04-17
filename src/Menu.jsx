import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
import pancake from "./assets/pancakes.jpg";
import ommelette from "./assets/ommelette.jpg";
import french from "./assets/frenchtoast.jpg";
import breakfast from "./assets/breakfastsandwich.jpg";
import smoothie from "./assets/smothiebowl.jpg";
import jollof from "./assets/jollofandchicken.jpg";
import burger from "./assets/burgerandfries.jpg";
import friedRice from "./assets/friedrice.jpg";
import shawarma from "./assets/shawarma.jpg";
import salad from "./assets/ceasarsalad.jpg";
import fish from "./assets/grilledfish.jpg";
import spagetti from "./assets/spagetti.jpg";
import steak from "./assets/steak.jpg";
import platter from "./assets/platter.jpg";
import alfredo from "./assets/ckickenalfredo.jpg";
import CustomNavbar from "./Nav";
import Footer from "./Footer";

function Menu() {
  return (
    <div className="menu-wrapper">
      <CustomNavbar />
      <section className="grids" style={{ textAlign: "center" }}>
        <h2>Our Menu</h2>
        <p>Enjoy our delicious breakfast, lunch, and dinner options</p>
        <Container>
          <Row>
            <Col>
              <Cards
                category="Breakfast"
                name="Pancakes & Syrup"
                price="3,000"
                desc="Fluffy pancakes served with maple syrup."
                image={pancake}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Breakfast"
                name="Omelette & Toast"
                price="2,500"
                desc="Egg omelette served with toasted bread."
                image={ommelette}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Breakfast"
                name="French Toast"
                price="3,200"
                desc="Golden brown toast with syrup and fruits."
                image={french}
                btnText="Order Now"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards
                category="Breakfast"
                name="Breakfast Sandwich"
                price="2,800"
                desc="Egg, cheese and sausage sandwich."
                image={breakfast}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Breakfast"
                name="Smoothie Bowl"
                price="3,500"
                desc="Healthy fruit smoothie bowl."
                image={smoothie}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Lunch"
                name="Jollof Rice & Chicken"
                price="4,500"
                desc="Classic Nigerian jollof rice with grilled chicken."
                image={jollof}
                btnText="Order Now"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards
                category="Lunch"
                name="Burger & Fries"
                price="4,000"
                desc="Juicy burger served with crispy fries."
                image={burger}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Lunch"
                name="Fried Rice"
                price="3,800"
                desc="Delicious fried rice with veggies."
                image={friedRice}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Lunch"
                name="Chicken Shawarma"
                price="3,500"
                desc="Tasty wrap filled with chicken and sauce."
                image={shawarma}
                btnText="Order Now"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards
                category="Lunch"
                name="Caesar Salad"
                price="3,200"
                desc="Fresh salad with creamy dressing."
                image={salad}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Dinner"
                name="Grilled Fish"
                price="6,000"
                desc="Well-seasoned grilled fish served with sides."
                image={fish}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Dinner"
                name="Spaghetti Bolognese"
                price="5,000"
                desc="Pasta served with rich meat sauce."
                image={spagetti}
                btnText="Order Now"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards
                category="Dinner"
                name="Steak & Potatoes"
                price="7,000"
                desc="Juicy steak served with roasted potatoes."
                image={steak}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Dinner"
                name="Seafood Platter"
                price="8,500"
                desc="Mixed seafood served with sauce."
                image={platter}
                btnText="Order Now"
              />
            </Col>
            <Col>
              <Cards
                category="Dinner"
                name="Chicken Alfredo"
                price="5,500"
                desc="Creamy pasta with grilled chicken."
                image={alfredo}
                btnText="Order Now"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Menu;
