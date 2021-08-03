import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Input = ({
  type,
  name,
  field,
  id,
  label,
  visible,
  required,
  readonly,
  currencyChar,
  nbDecimal,
  items,
  ListId,
  ordeR_ITEM,
  multipleClosedList,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="col-auto">
      <label htmlFor="nom" className="visually-hidden">
        {name}
      </label>
      <input
        type="text"
        readonly={Boolean}
        className="form-control-plaintext"
        value={name}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default Input;
