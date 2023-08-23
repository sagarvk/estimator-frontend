import { Input, FormGroup, Label } from 'reactstrap';

const DropdownField = ({
  id,
  fieldName,
  value,
  handleOnChange,
  type = 'select',
  title,
  options,
  labelKey,
  valueKey,
  ...rest
}) => {
  const formattedOptions =
    labelKey && valueKey
      ? options.map((option) => {
          return { label: option[labelKey], value: option[valueKey] };
        })
      : options;
  return (
    <FormGroup>
      <FormGroup>
        <Label for={id}>{title}</Label>
        <Input
          id={id}
          name={fieldName}
          type={type}
          onChange={handleOnChange}
          value={value}
          {...rest}
        >
          <option key={`some_title_for_${title}`} value="">
            Please Select
          </option>
          {formattedOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      </FormGroup>
    </FormGroup>
  );
};

export default DropdownField;
