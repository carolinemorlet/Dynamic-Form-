import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Textarea from './elements/Textarea';

const Element = ({
  data: {
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
  },
}) => {
  switch (type) {
    case 'EDIT_STRING':
      return (
        <Input
          type={type}
          name={name}
          field={field}
          id={id}
          label={label}
          visible={visible}
          requred={required}
          readonly={readonly}
          currencyChar={currencyChar}
          nbDecimal={nbDecimal}
          ListId={ListId}
          ordeR_ITEM={ordeR_ITEM}
          multipleClosedList={multipleClosedList}
        />
      );

    case 'NUMBER':
      return (
        <Input
          type={type}
          name={name}
          field={field}
          id={id}
          label={label}
          visible={visible}
          requred={required}
          readonly={readonly}
          currencyChar={currencyChar}
          nbDecimal={nbDecimal}
          ListId={ListId}
          ordeR_ITEM={ordeR_ITEM}
          multipleClosedList={multipleClosedList}
        />
      );

    case 'DATE':
      return (
        <Input
          type={type}
          name={name}
          field={field}
          id={id}
          label={label}
          visible={visible}
          requred={required}
          readonly={readonly}
          currencyChar={currencyChar}
          nbDecimal={nbDecimal}
          ListId={ListId}
          ordeR_ITEM={ordeR_ITEM}
          multipleClosedList={multipleClosedList}
        />
      );

    case 'RICH_EDIT':
      return (
        <Textarea
          type={type}
          name={name}
          field={field}
          id={id}
          label={label}
          visible={visible}
          requred={required}
          readonly={readonly}
          currencyChar={currencyChar}
          nbDecimal={nbDecimal}
          ListId={ListId}
          ordeR_ITEM={ordeR_ITEM}
          multipleClosedList={multipleClosedList}
        />
      );

    case 'COMBO_CLOSED_INDEX_STRING':
      return (
        <Select
          type={type}
          name={name}
          field={field}
          id={id}
          label={label}
          visible={visible}
          requred={required}
          readonly={readonly}
          currencyChar={currencyChar}
          nbDecimal={nbDecimal}
          ListId={ListId}
          ordeR_ITEM={ordeR_ITEM}
          multipleClosedList={multipleClosedList}
        />
      );

    default:
      return null;
  }
};

export default Element;
