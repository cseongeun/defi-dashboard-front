import { Icon } from '@iconify/react';
import React, { useRef, useState, useEffect } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuPopover from '../../components/MenuPopover';
import useAuth from '../../hooks/useAuth';
import account from '../../_mocks_/account';
import useModal from '../../hooks/useModal';
import WalletConnectModal from '../../components/Wallet/WalletConnectModal';
import { useWeb3React } from '@web3-react/core';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '#',
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: '#',
  },
];

const WalletPopover: React.FC = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();

  const [onPresentWalletConnectModal] = useModal(<WalletConnectModal login={login} />);

  const handleWalletConnect = () => {
    onPresentWalletConnectModal();
  };

  return (
    <>
      <IconButton onClick={handleWalletConnect}>
        <AccountBalanceWalletIcon color={account ? 'info' : 'disabled'} />
      </IconButton>
    </>
  );
};

export default WalletPopover;
