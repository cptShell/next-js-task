import { FC, ReactNode } from 'react';
import { Header } from '@/components/header/header';
import AppProvider from '@/store/provider';
import './globals.scss';

export const metadata = {
  title: 'Currency Rate App',
  description: 'An App for watching currencies and rates',
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
