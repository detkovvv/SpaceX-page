import { type FC } from 'react';

import style from './Navbar.module.css';
import logo from '../../assets/icons/logo.png';

export const Navbar: FC = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navbar_row}>
                    <a className={style.logo} href='#'>
                        <img src={logo} />
                    </a>
                    <ul className={style.navbar_list}>
                        <li className={style.navbar_list_item}>
                            <a href='#'>Главная</a>
                        </li>
                        <li className={style.navbar_list_item}>
                            <a href='#'>Технология</a>
                        </li>
                        <li className={style.navbar_list_item}>
                            <a href='#'>График полетов</a>
                        </li>{' '}
                        <li className={style.navbar_list_item}>
                            <a href='#'>Гарантии</a>
                        </li>{' '}
                        <li className={style.navbar_list_item}>
                            <a href='#'>О компании</a>
                        </li>{' '}
                        <li className={style.navbar_list_item}>
                            <a href='#'>Контакты</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
