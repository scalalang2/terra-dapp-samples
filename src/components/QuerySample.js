import { LCDClient } from '@terra-money/terra.js';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import React, { useEffect, useMemo, useState } from 'react';

export default function QuerySample() {
  const connectedWallet = useConnectedWallet();

  const [bank, setBank] = useState();

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return null;
    }

    return new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    });
  }, [connectedWallet]);

  useEffect(() => {
    if (connectedWallet && lcd) {
      lcd.bank.balance(connectedWallet.walletAddress).then((coins) => {
        console.log(coins)
        setBank(coins.toString());
      });

      lcd.wasm.contractQuery("terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy", {
        balance: {
          address: connectedWallet.terraAddress
        }
      }).then(value => {
        console.log("mine query")
        console.log(value)
      })
    } else {
      setBank(null);
    }
  }, [connectedWallet, lcd]);

  return (
    <div>
      <h1>Query Sample</h1>
      <pre>
        { JSON.stringify(connectedWallet) }
      </pre>
      {bank && <pre>{bank}</pre>}
      {!connectedWallet && <p>Wallet not connected!</p>}
    </div>
  );
}
