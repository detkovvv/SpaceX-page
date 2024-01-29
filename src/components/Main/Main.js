import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Main.module.css';
import { Benefits } from '../Benefits/Benefits';
import { Header } from '../Header/Header';
export const Main = ({ benefits, header }) => {
    return (_jsxs("div", Object.assign({ className: style.main }, { children: [_jsx(Header, { header: header }), _jsx(Benefits, { benefits: benefits })] })));
};
