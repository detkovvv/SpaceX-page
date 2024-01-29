import { type FC } from 'react';

import style from './Main.module.css';
import { Benefits } from '../Benefits/Benefits';
import { Header } from '../Header/Header';

type MainProps = {
    benefits: {
        id: string;
        firstLine: string;
        secondLine: string;
        thirdLine: string;
    }[];
    header: {
        mainTitle: string;
        title: string;
        headersButton: string;
    };
};

export const Main: FC<MainProps> = ({ benefits, header }) => {
    return (
        <div className={style.main}>
            <Header header={header} />
            <Benefits benefits={benefits} />
        </div>
    );
};
