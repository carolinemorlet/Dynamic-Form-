import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Textarea from './elements/Textarea';

const Element = ({
  data

  ,
}) => {

  switch (data.type) {
    case 'EDIT_STRING':
      return (
        <Input
          type={data.type}
          name={data.name}
          field={data.field}
          id={data.id}
          label={data.label}
          visible={data.visible}
          requred={data.required}
          readonly={data.readonly}
          currencyChar={data.currencyChar}
          nbDecimal={data.nbDecimal}
          ListId={data.ListId}
          ordeR_ITEM={data.ordeR_ITEM}
          multipleClosedList={data.multipleClosedList}
        />
      );

    case 'NUMBER':
      return (
        <Input
        type={data.type}
        name={data.name}
        field={data.field}
        id={data.id}
        label={data.label}
        visible={data.visible}
        requred={data.required}
        readonly={data.readonly}
        currencyChar={data.currencyChar}
        nbDecimal={data.nbDecimal}
        ListId={data.ListId}
        ordeR_ITEM={data.ordeR_ITEM}
        multipleClosedList={data.multipleClosedList}
        />
      );

    case 'DATE':
      return (
        <Input
        type={data.type}
        name={data.name}
        field={data.field}
        id={data.id}
        label={data.label}
        visible={data.visible}
        requred={data.required}
        readonly={data.readonly}
        currencyChar={data.currencyChar}
        nbDecimal={data.nbDecimal}
        ListId={data.ListId}
        ordeR_ITEM={data.ordeR_ITEM}
        multipleClosedList={data.multipleClosedList}
        />
      );

    case 'RICH_EDIT':
      return (
        <Textarea
        type={data.type}
        name={data.name}
        field={data.field}
        id={data.id}
        label={data.label}
        visible={data.visible}
        requred={data.required}
        readonly={data.readonly}
        currencyChar={data.currencyChar}
        nbDecimal={data.nbDecimal}
        ListId={data.ListId}
        ordeR_ITEM={data.ordeR_ITEM}
        multipleClosedList={data.multipleClosedList}

        />
      );

    case 'COMBO_CLOSED_INDEX_STRING':
      return (
        <Select
        type={data.type}
        name={data.name}
        field={data.field}
        id={data.id}
        label={data.label}
        visible={data.visible}
        requred={data.required}
        readonly={data.readonly}
        currencyChar={data.currencyChar}
        nbDecimal={data.nbDecimal}
        ListId={data.ListId}
        ordeR_ITEM={data.ordeR_ITEM}
        multipleClosedList={data.multipleClosedList}
          items={data.items}
          
        />
      );

    default:
      return null;
  }
};

export default Element;
