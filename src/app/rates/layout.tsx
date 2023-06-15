import { FC, ReactNode } from 'react';
import style from './layout.module.scss';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};

export default DashboardLayout;
