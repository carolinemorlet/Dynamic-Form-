import React from 'react';

const Textarea = ({
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
  return (
    <div class="form-floating">
      <label htmlFor={name} className="visually-hidden">
        {name}
      </label>
      <textarea className="form-control"></textarea>
    </div>
  );
};

export default Textarea;
