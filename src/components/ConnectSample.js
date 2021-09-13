import { useWallet, WalletStatus, ConnectType } from '@terra-money/wallet-provider';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import Page from './Page';

export default function ConnectSample() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet();

  const history = useHistory();

  return (
    <Page title={'연동하기'}>
        <div className="col-md-12 pt-3">
          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => connect(ConnectType.CHROME_EXTENSION)}
            >
              Connect Terra Station
            </button>
          )}

          {status === WalletStatus.WALLET_CONNECTED && (
            <button 
              type="button" 
              className="btn btn-warning" 
              onClick={() => disconnect()}>Disconnect {wallets[0].terraAddress}</button>
          )}
        </div>
    </Page>
  );
}