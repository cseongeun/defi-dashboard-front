import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../connectors';
import { ToastProvider } from '../contexts/Toast';
import { ModalProvider } from '../contexts/Modal';

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </HelmetProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
