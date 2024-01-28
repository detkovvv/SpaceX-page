import { type FC } from 'react';

import style from './Navbar.module.css';
import angle from '../../assets/icons/angle.png';
import logo from '../../assets/icons/logo.png';

export const Navbar: FC = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navbar_row}>
                    <a className={style.logo} href='#'>
                        <img alt='logo' src={logo} />
                        <img
                            alt='angle'
                            className={`${style.angleLeftBottom} ${style.angle}`}
                            src={angle}
                        />
                        <img
                            alt='angle'
                            className={`${style.angleLeftTop} ${style.angle}`}
                            src={angle}
                        />
                        <img
                            alt='angle'
                            className={`${style.angleRightTop} ${style.angle}`}
                            src={angle}
                        />
                        <img
                            alt='angle'
                            className={`${style.angleRightBottom} ${style.angle}`}
                            src={angle}
                        />
                    </a>
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
                </div>
            </nav>
        </div>
    );
};
