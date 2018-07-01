import React from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, type, label, placeholder, meta }) => {
  return (
    <div className="form-group">
      <div className="field-label">{label}</div>
      <div className="field-value">
        <input
          className="form-control"
          {...input}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {meta.touched &&
        (meta.error && (
          <span className="form-control-error">{meta.error}</span>
        ))}
    </div>
  );
};

const InputField = ({ name, type, label, validate, placeholder, children }) => {
  return (
    <Field
      className="form-control"
      name={name}
      label={label}
      component={renderField}
      validate={validate}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputField;
