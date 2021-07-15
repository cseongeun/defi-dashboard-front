import { ConnectorNames } from './connector';

export interface IConnector {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
}

export type TLogin = (connectorId: ConnectorNames) => void;
