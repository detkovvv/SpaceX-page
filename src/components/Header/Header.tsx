import { type FC } from 'react';

import style from './Header.module.css';
import glareTop from '../../assets/icons/glare1.png';
import glareBottom from '../../assets/icons/glare2.png';

type HeaderProps = {
    header: {
        mainTitle: string;
        title: string;
        headersButton: string;
    };
};

export const Header: FC<HeaderProps> = ({ header }) => {
    return (
        <div className={style.header}>
            <div className={style.header_text}>
                <h1 className={style.main_title}>{header.mainTitle}</h1>
                <h2 className={style.title}>{header.title}</h2>
            </div>
            <div className={style.button_item}>
                <button className={style.button}>{header.headersButton}</button>
                <img alt='glare-top' className={style.blareTop} src={glareTop} />
                <img alt='glare-bottom' className={style.blareBottom} src={glareBottom} />
            </div>
        </div>
    );
};
