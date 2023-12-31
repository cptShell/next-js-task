'use client';

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
