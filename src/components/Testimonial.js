import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import styles from './Testimonial.module.css';

const Testimonial = ({ title, text }) => (
  <Card className={`col-md-3 ${styles.cardBox}`}>
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardBody>
  </Card>
);

export default Testimonial;
