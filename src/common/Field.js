import { Row, Col } from 'reactstrap';
import DropdownField from './DropdownField';
import TextField from './TextField';

const Field = (props) => {
  return (
    <Row>
      <Col>
        {props.type === 'select' && <DropdownField {...props} />}
        {props.type !== 'select' && <TextField {...props} />}
      </Col>
    </Row>
  );
};

export default Field;
