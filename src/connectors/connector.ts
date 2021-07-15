import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { IConnector } from './types';

const POLLING_INTERVAL = 12000;

const injected = new InjectedConnector({ supportedChainIds: [1] });

const walletconnect = new WalletConnectConnector({
  rpc: { 1: 'https://mainnet.infura.io/v3/a74ce6259ee749228b426a1ca28bfc9b' },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

export const connectors: IConnector[] = [
  {
    title: 'Metamask',
    icon: '/images/wallets/metamask.png',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    icon: '/images/wallets/wallet-connect.svg',
    connectorId: ConnectorNames.WalletConnect,
  },
];

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
