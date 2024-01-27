import { type FC } from 'react';

import style from './Main.module.css';

export const Main: FC = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div className={style.header_text}>
                    <h1 className={style.main_title}>путешествие</h1>
                    <h2 className={style.title}>на красную планету</h2>
                </div>
                <div>
                    <button className={style.button}>Начать путешествие</button>
                </div>
            </div>
            <div className={style.benefits}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <div className={style.item_text}>мы</div>
                        <div className={style.item_number}>1</div>
                        <div className={style.item_text}>на рынке</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_text}>календарик за</div>
                        <div className={style.item_number}>2001</div>
                        <div className={style.item_text}>в подарок</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_text}>гарантируем</div>
                        <div className={style.item_number}>50%</div>
                        <div className={style.item_text}>безопасность</div>
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
