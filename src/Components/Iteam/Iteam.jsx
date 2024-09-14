import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Iteam({ item }) {
  return (
    <Col lg={3} className="p-3">
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">More info</Button>
          <Link to={`product/${item.id}`}>More info</Link>  
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Iteam;