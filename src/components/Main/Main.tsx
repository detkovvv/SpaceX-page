import { type FC } from 'react';

import style from './Main.module.css';
import { Benefits } from '../Benefits/Benefits';
import { Header } from '../Header/Header';

export const Main: FC = () => {
    return (
        <div className={style.main}>
            <Header />
            <Benefits />
        </div>
    );
};
