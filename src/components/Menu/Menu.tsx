import { type FC } from 'react';

import style from './Menu.module.css';

type MenuProps = {
    menu: { id: string; name: string }[];
};

export const Menu: FC<MenuProps> = ({ menu }) => {
    return (
        <ul className={style.navbar_list}>
            {menu.map((item) => {
                return (
                    <li className={style.navbar_list_item} key={item.id}>
                        <a className={style.item_link} href='#'>
                            {item.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
