import React, { useReducer } from 'react';
import { Box } from '@mui/material';

import Table from './Table';
import {
  makeListData,
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
  const [state, dispatch] = useReducer(reducer, makeListData());

  let columns = [
    {
      id: 'symbol',
      label: 'symbol',
      accessor: 'symbol',
      dataType: DataTypes.TEXT,
      minWidth: 100,
      options: [],
    },
    {
      id: 'reward',
      label: 'reward',
      accessor: 'reward',
      dataType: DataTypes.TEXT,
      minWidth: 50,
      options: [],
    },
    {
      id: 'hedge',
      label: 'hedge',
      accessor: 'hedge',
      dataType: DataTypes.TEXT,
      minWidth: 50,
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
