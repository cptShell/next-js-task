import { FC } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import style from './loader.module.scss';

export const AppLoader: FC = () => {
  return (
    <div className={style.loader}>
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="black"
        barColor="black"
      />
    </div>
  );
};
