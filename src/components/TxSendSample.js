import { MsgSend, StdFee } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied,
} from '@terra-money/wallet-provider';
import React, { useCallback, useState } from 'react';

const toAddress = 'terra12hnhh5vtyg5juqnzm43970nh4fw42pt27nw9g9';

export default function TxSendSample() {
  const [txResult, setTxResult] = useState(null);
  const [txError, setTxError] = useState(null);

  const connectedWallet = useConnectedWallet();

  const send = useCallback(() => {
    if (!connectedWallet) {
      return;
    }

    setTxResult(null);

    connectedWallet
      .post({
        fee: new StdFee(1000000, '200000uusd'),
        msgs: [
          new MsgSend(connectedWallet.walletAddress, toAddress, {
            uusd: 1000000,
          }),
        ],
      })
      .then((nextTxResult) => {
        console.log(nextTxResult);
        setTxResult(nextTxResult);
      })
      .catch((error) => {
        if (error instanceof UserDenied) {
          setTxError('Deny 버튼을 누름');
        } else if (error instanceof CreateTxFailed) {
          setTxError('트랜잭션 생성 실패: ' + error.message);
        } else if (error instanceof TxFailed) {
          setTxError('트랜잭션 실패: ' + error.message);
        } else if (error instanceof Timeout) {
          setTxError('네트워크 응답 없음');
        } else if (error instanceof TxUnspecifiedError) {
          setTxError('존재하지 않는 트랜잭션 분류 : ' + error.message);
        } else {
          setTxError(
            'Unknown Error: ' +
              (error instanceof Error ? error.message : String(error)),
          );
        }
      });
  }, [connectedWallet]);

  return (
    <div>
      <h1>Tx Sample</h1>
      {connectedWallet?.availablePost && !txResult && !txError && (
        <button type="button" className="btn btn-primary" onClick={send}>Send 1USD to {toAddress}</button>
      )}
      {txResult && (
        <>
          <pre>{JSON.stringify(txResult, null, 2)}</pre>
          <button type="button" className="btn btn-primary" onClick={() => setTxResult(null)}>Clear Tx Result</button>
        </>
      )}
      {txError && (
        <>
          <pre>{txError}</pre>
          <button type="button" className="btn btn-primary" onClick={() => setTxError(null)}>Clear Tx Error</button>
        </>
      )}
      {!connectedWallet && <p>Wallet not connected!</p>}
      {connectedWallet && !connectedWallet.availablePost && (
        <p>Can not post Tx</p>
      )}
    </div>
  );
}
