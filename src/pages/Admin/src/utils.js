export function makeData() {
  const data = [
    {field: 'Client/Agent No.', value: '1'},
    {field: 'Sub-client', value: '2,3'},
    {field: 'PreName', value: 'Daniel'},
    {field: 'LastName', value: 'Himmelreich'},
    {field: 'Samrtphone', value: '41797895623'},
    {field: 'E-Mail/Login', value: 'daniel.himmelreich@dalnet.ch'},
    {field: 'Password', value: 'Dslek451*g'},
    {field: 'Investment', value: '20000'},
    {field: 'ExternWallet', value: '1000'},
    {field: 'RewardBroker', value: 'ICMarkets'},
    {field: 'Server', value: 'ICMarketsSC-Demo04'},
    {field: 'MarginLevel%', value: '50%'},
    {field: 'MetaAPI-ID', value: 'c72efb03-5c3a-4326-acc2-6e2cf50c4222'},
    {field: 'MT4 Account', value: '12345678'},
    {field: 'MT4 TraderPw', value: 'rezfgim7dt'},
    {field: 'MT4 OnlyRead', value: 'eijuvio69'},
    {field: 'Backend Client', value: 'daniel.himmelreich@dalnet.ch'},
    {field: 'Pw. Backend', value: 'slkeru5oj31s'},
    {field: 'HedingBroker', value: 'OctaFX'},
    {field: 'Server', value: 'OctaFx-Demo'},
    {field: 'MarginLevel%', value: '85%'},
    {field: 'MetaAPI-ID', value: 'c72efb03-5c3a-4326-acc2-6e2cf50c4222'},
    {field: 'MT4 Account', value: '987321'},
    {field: 'MT4 TraderPw', value: 'Iwekru5613'},
    {field: 'MT4 OnlyRead', value: 'cioser3*5'},
    {field: 'Backend Client', value: 'daniel.himmelreich@dalnet.ch'},
    {field: 'Pw. Backend', value: 'slkeru5oj31s'},
  ]
  
  return { data: data, skipReset: false };
}

export function makeListData() {
  const data = [
    {symbol: 'USDMXN', reward: 'SELL', hedge: 'BUY'},
    {symbol: 'USDMXN', reward: 'BUSY', hedge: 'SELL'},
    {symbol: 'USDMXN', reward: 'SELL', hedge: 'BUY'},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
    {symbol: '', reward: '', hedge: ''},
  ]
  
  return { data: data, skipReset: false };
}

export const ActionTypes = Object.freeze({
  UPDATE_CELL: 'update_cell',
});

export const DataTypes = Object.freeze({
  NUMBER: 'number',
  TEXT: 'text',
  SELECT: 'select',
});