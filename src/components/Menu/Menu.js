import { jsx as _jsx } from "react/jsx-runtime";
import style from './Menu.module.css';
export const Menu = ({ menu }) => {
    return (_jsx("ul", Object.assign({ className: style.navbar_list }, { children: menu.map((item) => {
            return (_jsx("li", Object.assign({ className: style.navbar_list_item }, { children: _jsx("a", Object.assign({ className: style.item_link, href: '#' }, { children: item.name })) }), item.id));
        }) })));
};
