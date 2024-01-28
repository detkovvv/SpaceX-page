import { type FC } from 'react';

import style from './Menu.module.css';

export const Menu: FC = () => {
    return (
        <ul className={style.navbar_list}>
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    Главная
                </a>
            </li>
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    Технология
                </a>
            </li>
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    График полетов
                </a>
            </li>{' '}
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    Гарантии
                </a>
            </li>{' '}
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    О компании
                </a>
            </li>{' '}
            <li className={style.navbar_list_item}>
                <a className={style.item_link} href='#'>
                    Контакты
                </a>
            </li>
        </ul>
    );
};
