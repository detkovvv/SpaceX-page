import { type FC } from 'react';

import style from './Benefit.module.css';

type BenefitProps = {
    firstLine: string;
    secondLine: string;
    thirdLine: string;
};

export const Benefit: FC<BenefitProps> = ({ firstLine, secondLine, thirdLine }) => {
    return (
        <li className={style.item}>
            <div className={style.item_text}>{firstLine}</div>
            <div className={style.item_number}>{secondLine}</div>
            <div className={style.item_text}>{thirdLine}</div>
        </li>
    );
};
