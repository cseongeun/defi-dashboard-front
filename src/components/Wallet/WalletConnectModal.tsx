import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { connectors, TLogin } from '../../connectors';
import { Modal } from '../Modal';
import { ConnectorKey } from '../../common/key';
import { ListItemAvatar } from '@material-ui/core';

interface WalletConnectModalProps {
  login: TLogin;
  onDismiss?: () => void;
}

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  login,
  onDismiss = () => null,
}) => {
  return (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
      {connectors.map((entry, index) => (
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              login(entry.connectorId);
              window.localStorage.setItem(ConnectorKey, entry.connectorId);
              onDismiss();
            }}
          >
            <ListItemAvatar>
              <Avatar alt={entry.title} src={entry.icon} />
            </ListItemAvatar>
            <ListItemText primary={entry.title}></ListItemText>
          </ListItem>
          <Divider component="li" />
        </List>
      ))}
    </Modal>
  );
};

export default WalletConnectModal;
