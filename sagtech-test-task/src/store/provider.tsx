'use client';

import { Provider } from 'react-redux';
import store from './store';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
