import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import styles from "./Testimonial.module.css";

const Testimonial = ({ title, imgfile, text }) => (
  <Card className={`col-md-3 ${styles.cardBox}`}>
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      {/* <CardImg height="300%" src={imgfile} alt="Card image cap" /> */}
      <CardText>{text}</CardText>
    </CardBody>
  </Card>
);

export default Testimonial;
