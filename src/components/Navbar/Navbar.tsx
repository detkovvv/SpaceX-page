import { type FC } from 'react';

import style from './Navbar.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

export const Navbar: FC = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navbar_row}>
                    <Logo />
                    <Menu />
                </div>
            </nav>
        </div>
    );
};
