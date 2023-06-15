import { FC } from 'react';
import { AppRoutes } from '@/common/constants/constant';
import style from './header.module.scss';
import Link from 'next/link';

export const Header: FC = () => {
  const navItems = AppRoutes.map(({ name, link }) => {
    return (
      <li key={name}>
        <Link href={link}>{name}</Link>
      </li>
    );
  });

  return (
    <header className={style.header}>
      <nav className={style['nav-bar']}>
        <ul className={style['nav-list']}>{navItems}</ul>
      </nav>
    </header>
  );
};
