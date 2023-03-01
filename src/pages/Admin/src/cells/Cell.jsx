import React from 'react';
import { DataTypes } from '../utils';
import TextCell from './TextCell';

export default function Cell({
  value: initialValue,
  row: { index },
  column: { id, dataType, options },
  dataDispatch,
}) {
  function getCellElement() {
    switch (dataType) {
      case DataTypes.TEXT:
        return (
          <TextCell
            initialValue={initialValue}
            rowIndex={index}
            columnId={id}
            dataDispatch={dataDispatch}
          />
        );
      default:
        return <span></span>;
    }
  }

  return getCellElement();
}
