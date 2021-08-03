import React from 'react';

const Select = ({
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
    <div>
      <label htmlFor={name} className="visually-hidden">
        {name}
      </label>
      <select
        className={name}
        aria-label="Default select example"
        id={id}
        value=""
      >
        <option disabled selected>
          {name}
        </option>
        {items.length > 0 &&
          items.map((item, i) => (
            <option value={item.label} key={i}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
