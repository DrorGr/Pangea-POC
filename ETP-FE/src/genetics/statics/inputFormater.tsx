/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";

export const fieldBuilder = (field: any) => {
  const { type, error, required, disabled, name, label, options } = field;

  const commonProps = {
    error,
    required,
    disabled,
  };

  const renderLabel = () => (
    <FormLabel {...commonProps} htmlFor={name}>
      {label}
    </FormLabel>
  );

  const renderTextField = (type: string) => (
    <TextField {...commonProps} variant="standard" type={type} name={name} />
  );

  const renderSelect = () => (
    <Select {...commonProps} name={name}>
      {options.map((option: any) => (
        <MenuItem value={option.value}>{option.label}</MenuItem>
      ))}
    </Select>
  );

  const renderRadioGroup = () => (
    <RadioGroup {...commonProps} name={name}>
      {options.map((option: any) => (
        <FormControlLabel
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );

  const renderCheckboxGroup = () => (
    <FormControl {...commonProps}>
      {options.map((option: any) => (
        <FormControlLabel control={<Checkbox />} label={option.label} />
      ))}
    </FormControl>
  );

  switch (type) {
    case "text":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderTextField("text")}
          </FormControl>
        </div>
      );
    case "textarea":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderTextField("text")}
          </FormControl>
        </div>
      );
    case "select":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderSelect()}
          </FormControl>
        </div>
      );
    case "radio":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderRadioGroup()}
          </FormControl>
        </div>
      );
    case "checkbox":
      return <div>{renderCheckboxGroup()}</div>;
    case "file":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            <input type="file" name={name} />
          </FormControl>
        </div>
      );
    case "button":
      return (
        <div>
          <Button {...commonProps} type={type}>
            {label}
          </Button>
        </div>
      );
    case "number":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderTextField("number")}
          </FormControl>
        </div>
      );
    case "email":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            {renderTextField("email")}
          </FormControl>
        </div>
      );
    case "date":
      return (
        <div>
          <FormControl {...commonProps}>
            {renderLabel()}
            <TextField
              disabled={disabled}
              variant="standard"
              type="date"
              name={name}
            />
          </FormControl>
        </div>
      );
    default:
      return <div>Field not found</div>;
  }
};
