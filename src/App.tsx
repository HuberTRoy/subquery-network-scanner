// SPDX-License-Identifier: GNU-3.0

import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScannerHeader } from '@components/Header';
import { SubqlProvider } from '@subql/components';

import { IPFSProvider, ProjectMetadataProvider, QueryApolloProvider } from './containers';
import { ScannerRouterComponent } from './router';

import './App.less';

// TODO: Remove SQTProvider
const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <IPFSProvider initialState={{ gateway: import.meta.env.VITE_IPFS_GATEWAY }}>
      <QueryApolloProvider>
        <ProjectMetadataProvider>
          <SubqlProvider theme={'dark'}>{children}</SubqlProvider>
        </ProjectMetadataProvider>
      </QueryApolloProvider>
    </IPFSProvider>
  );
};

const RenderRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="scannerMain">
        <ScannerHeader></ScannerHeader>
        <ScannerRouterComponent></ScannerRouterComponent>
      </div>
    </BrowserRouter>
  );
};

export const App: React.FC = () => {
  return (
    <Providers>
      <div className="App">
        <RenderRouter />
        <div className="footer">
          <p>
            Made with ❤️ by the SubQuery Community -{' '}
            <a href="https://github.com/HuberTRoy/subquery-sqtscan" target="_blank" rel="noreferrer">
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </Providers>
  );
};
