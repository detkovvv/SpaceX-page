import { type FC } from 'react';

import style from './Header.module.css';
import glareTop from '../../assets/icons/glare1.png';
import glareBottom from '../../assets/icons/glare2.png';

export const Header: FC = () => {
    return (
        <div className={style.header}>
            <div className={style.header_text}>
                <h1 className={style.main_title}>путешествие</h1>
                <h2 className={style.title}>на красную планету</h2>
            </div>
            <div className={style.button_item}>
                <button className={style.button}>Начать путешествие</button>
                <img alt='glare-top' className={style.blareTop} src={glareTop} />
                <img alt='glare-bottom' className={style.blareBottom} src={glareBottom} />
            </div>
        </div>
    );
};
