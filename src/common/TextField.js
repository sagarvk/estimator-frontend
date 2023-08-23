import { Row, Col, Input, FormGroup, Label } from 'reactstrap';

const TextField = ({
  id,
  fieldName,
  value,
  handleOnChange,
  type = 'text',
  title,
  required = true,
  ...rest
}) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <FormGroup>
            <Label required={required} for={id}>
              {title}
            </Label>
            <Input
              id={id}
              name={fieldName}
              type={type}
              onChange={handleOnChange}
              value={value}
              required={required}
              {...rest}
            />
          </FormGroup>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default TextField;
