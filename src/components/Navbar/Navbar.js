import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Navbar.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
export const Navbar = ({ logo, menu }) => {
    return (_jsx("div", { children: _jsx("nav", Object.assign({ className: style.navbar }, { children: _jsxs("div", Object.assign({ className: style.navbar_row }, { children: [_jsx(Logo, { logo: logo }), _jsx(Menu, { menu: menu })] })) })) }));
};
