import { type FC } from 'react';

import style from './Logo.module.css';
import angle from '../../assets/icons/angle.png';
import logo from '../../assets/icons/logo.png';

export const Logo: FC = () => {
    return (
        <a className={style.logo} href='#'>
            <img alt='logo' src={logo} />
            <img alt='angle' className={`${style.angleLeftBottom} ${style.angle}`} src={angle} />
            <img alt='angle' className={`${style.angleLeftTop} ${style.angle}`} src={angle} />
            <img alt='angle' className={`${style.angleRightTop} ${style.angle}`} src={angle} />
            <img alt='angle' className={`${style.angleRightBottom} ${style.angle}`} src={angle} />
        </a>
    );
};
