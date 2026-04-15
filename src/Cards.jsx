import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({
  image = "./images/react.svg",
  category = "codex",
  name = "React Icon",
  desc = "The globally known logo",
  price = "90.99",
  btnText = "Order Now",
}) {
  return (
    <div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Category:</strong> {category} <br />
            <strong>Description:</strong> {desc} <br />
            <strong>Price:</strong> ₦{price}
          </Card.Text>

          <Button variant="primary">{btnText}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
