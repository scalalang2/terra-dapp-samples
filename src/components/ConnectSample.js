import { useWallet, WalletStatus, ConnectType } from '@terra-money/wallet-provider';
import { useHistory } from 'react-router-dom';
import React from 'react';

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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary"
            onClick={() => history.goBack()}>뒤로가기</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pt-3">
          <h2>지갑 연동</h2>
          <p>지갑 연동하기</p>
          <hr />
        </div>
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
              onClick={() => disconnect()}>Disconnect</button>
          )}
        </div>
      </div>
    </div>
  );
}
