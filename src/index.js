import { NetworkInfo, WalletProvider } from '@terra-money/wallet-provider';
import ConnectSample from 'components/ConnectSample';
import QuerySample from 'components/QuerySample';
import TxSendSample from 'components/TxSendSample';
import Navigation from 'components/Navigation';

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CounterSample from 'components/react/CounterSample';
import ComponentSample from 'components/react/ComponentSample';
import FormFieldSample from 'components/react/FormFieldSample';
import TodoListSample from 'components/react/TodoListSample';

const mainnet = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev',
};

const testnet = {
  name: 'testnet',
  chainID: 'tequila-0004',
  lcd: 'https://tequila-lcd.terra.dev',
};

const walletConnectChainIds = {
  0: testnet,
  1: mainnet,
};

function App() {
  return (
    <main className="container pt-5">
      <Router>
        <Switch>
          <Route path="/react/components">
            <ComponentSample />
          </Route>
          <Route path="/react/counter">
            <CounterSample />
          </Route>
          <Route path="/react/fields">
            <FormFieldSample />
          </Route>
          <Route path="/react/todolist">
            <TodoListSample />
          </Route>
          <Route path="/connect">
            <ConnectSample />
          </Route>
          <Route path="/query">
            <QuerySample />
          </Route>
          <Route path="/send">
            <TxSendSample />
          </Route>
          <Route path="/">
            <Navigation />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

ReactDOM.render(
  <WalletProvider
    defaultNetwork={mainnet}
    walletConnectChainIds={walletConnectChainIds}
  >
    <App />
  </WalletProvider>,
  document.getElementById('root'),
);
