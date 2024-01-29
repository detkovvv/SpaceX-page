import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Logo.module.css';
import angle from '../../assets/icons/angle.png';
export const Logo = ({ logo }) => {
    console.log(logo);
    return (_jsxs("a", Object.assign({ className: style.logo, href: '#' }, { children: [_jsx("img", { alt: 'logo', src: logo }), _jsx("img", { alt: 'angle', className: `${style.angleLeftBottom} ${style.angle}`, src: angle }), _jsx("img", { alt: 'angle', className: `${style.angleLeftTop} ${style.angle}`, src: angle }), _jsx("img", { alt: 'angle', className: `${style.angleRightTop} ${style.angle}`, src: angle }), _jsx("img", { alt: 'angle', className: `${style.angleRightBottom} ${style.angle}`, src: angle })] })));
};
