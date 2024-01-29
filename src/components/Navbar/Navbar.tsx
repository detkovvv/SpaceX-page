import { type FC } from 'react';

import style from './Navbar.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

type NavbarProps = {
    logo: string;
    menu: { id: string; name: string }[];
};

export const Navbar: FC<NavbarProps> = ({ logo, menu }) => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navbar_row}>
                    <Logo logo={logo} />
                    <Menu menu={menu} />
                </div>
            </nav>
        </div>
    );
};
