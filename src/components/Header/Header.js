import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Header.module.css';
import glareTop from '../../assets/icons/glare1.png';
import glareBottom from '../../assets/icons/glare2.png';
export const Header = ({ header }) => {
    return (_jsxs("div", Object.assign({ className: style.header }, { children: [_jsxs("div", Object.assign({ className: style.header_text }, { children: [_jsx("h1", Object.assign({ className: style.main_title }, { children: header.mainTitle })), _jsx("h2", Object.assign({ className: style.title }, { children: header.title }))] })), _jsxs("div", Object.assign({ className: style.button_item }, { children: [_jsx("button", Object.assign({ className: style.button }, { children: header.headersButton })), _jsx("img", { alt: 'glare-top', className: style.blareTop, src: glareTop }), _jsx("img", { alt: 'glare-bottom', className: style.blareBottom, src: glareBottom })] }))] })));
};
