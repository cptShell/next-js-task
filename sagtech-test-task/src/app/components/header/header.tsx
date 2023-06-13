import { FC } from 'react';
import { AppRoutes } from '@/common/constants/constant';
import style from './header.module.scss';

export const Header: FC = () => {
  const navItems = AppRoutes.map(({ name, link }) => {
    return (
      <li key={name}>
        <a href={link}>{name}</a>
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
