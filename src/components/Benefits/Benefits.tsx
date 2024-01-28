import { type FC } from 'react';

import style from './Benefits.module.css';

export const Benefits: FC = () => {
    return (
        <div className={style.benefits}>
            <ul className={style.list}>
                <li className={`${style.item} ${style.item1}`}>
                    <div className={style.item_text}>мы</div>
                    <div className={style.item_number}>1</div>
                    <div className={style.item_text}>на рынке</div>
                </li>
                <li className={`${style.item} ${style.item2}`}>
                    <div className={style.item_text}>календарик за</div>
                    <div className={style.item_number}>2001</div>
                    <div className={style.item_text}>в подарок</div>
                </li>
                <li className={`${style.item} ${style.item3}`}>
                    <div className={style.item_text}>гарантируем</div>
                    <div className={style.item_number}>50%</div>
                    <div className={style.item_text}>безопасность</div>
                </li>
                <li className={`${style.item} ${style.item4}`}>
                    <div className={style.item_text}>путешествие</div>
                    <div className={style.item_number}>597</div>
                    <div className={style.item_text}>дней</div>
                </li>
            </ul>
        </div>
    );
};
