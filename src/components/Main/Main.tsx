import { type FC } from 'react';

import style from './Main.module.css';

export const Main: FC = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <h1 className={style.main_title}>ПУТЕШЕСТВИЕ</h1>
                <h2 className={style.title}>на красную планету</h2>
                <button className={style.button}>Начать путешествие</button>
            </div>
            <div className={style.benefits}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <div className={style.item_text}>мы</div>
                        <div className={style.item_number}>1</div>
                        <div className={style.item_text}>на рынке</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_text}>гарантируем</div>
                        <div className={style.item_number}>100%</div>
                        <div className={style.item_text}>безопасность</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_text}>календарик за</div>
                        <div className={style.item_number}>2001</div>
                        <div className={style.item_text}>в подарок</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_text}>путешествие</div>
                        <div className={style.item_number}>597</div>
                        <div className={style.item_text}>дней</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
