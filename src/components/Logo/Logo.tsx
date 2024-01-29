import { type FC } from 'react';

import style from './Logo.module.css';
import angle from '../../../public/icons/angle.png';

type LogoProps = {
    logo: string;
};

export const Logo: FC<LogoProps> = ({ logo }) => {
    console.log(logo);
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
