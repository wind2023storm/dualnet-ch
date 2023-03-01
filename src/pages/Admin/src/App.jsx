import React, { useReducer } from 'react';
import { Box } from '@mui/material';

import Table from './Table';
import {
  makeData,
  ActionTypes,
  DataTypes
} from './utils';
import update from 'immutability-helper';

import './style.css';

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CELL:
      return update(state, {
        skipReset: { $set: true },
        data: {
          [action.rowIndex]: { [action.columnId]: { $set: action.value } },
        },
      });default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, makeData());
  
  let columns = [
    {
      id: 'field',
      label: 'field',
      accessor: 'field',
      dataType: DataTypes.TEXT,
      minWidth: 150,
      options: [],
    },
    {
      id: 'value',
      label: 'value',
      accessor: 'value',
      dataType: DataTypes.TEXT,
      minWidth: 300,
      options: [],
    },
  ];
  
  return (
    <Box mx={2}>
        <Table
          columns={columns}
          data={state.data}
          dispatch={dispatch}
        />
    </Box>
  );
}

export default App;
