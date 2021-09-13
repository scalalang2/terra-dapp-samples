import { LCDClient } from '@terra-money/terra.js';
import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import { Tag } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import Page from './Page';

export default function QuerySample() {
  const connectedWallet = useConnectedWallet();

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return null;
    }

    // light client daemon
    return new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    });
  }, [connectedWallet]);

  const fetchUSTandKRT = () => {
    lcd.bank.balance(connectedWallet.walletAddress).then((coins) => {
      // setKRT(coins._coins.ukrw.amount.toString())
      // setUST(coins._coins.uusd.amount.toString())
    });
  }

  const fetchMINE = () => {
    let mine_contract_address = "terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy"
    lcd.wasm.contractQuery(mine_contract_address, {
      balance: {
        // 연결된 지갑의 테라 주소
        address: connectedWallet.terraAddress
      }
    }).then(value => {
      console.log(value)
      // setMINE(value.balance)
    })
  }

  useEffect(() => {
    // 화면이 처음 렌더링 될 때 실행디 되요.
    // 지갑이 연결되어 있으면, 잔액을 가져오기
    if (connectedWallet && lcd) {
      fetchUSTandKRT()
      fetchMINE() 
    }
  }, [connectedWallet, lcd]);

  return (
    <Page title="지갑 정보 조회">
      <p>테라에서는 Decimal이 6입니다.</p>
      <ul>
        <li><Tag color={'green'}>KRT: {krt}</Tag></li>
        <li><Tag color={'purple'}>UST: {ust}</Tag></li>
        <li><Tag color={'blue'}>MINE: {mine}</Tag></li>
      </ul>
    </Page>
  );
}
