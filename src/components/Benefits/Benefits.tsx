import { type FC } from 'react';

import style from './Benefits.module.css';

type BenefitsProps = {
    benefits: {
        id: string;
        firstLine: string;
        secondLine: string;
        thirdLine: string;
    }[];
};

export const Benefits: FC<BenefitsProps> = ({ benefits }) => {
    return (
        <div className={style.benefits}>
            <ul className={style.list}>
                <li className={`${style.item} ${style.item1}`}>
                    <div className={style.item_text}>{benefits[0].firstLine}</div>
                    <div className={style.item_number}>{benefits[0].secondLine}</div>
                    <div className={style.item_text}>{benefits[0].thirdLine}</div>
                </li>
                <li className={`${style.item} ${style.item2}`}>
                    <div className={style.item_text}>{benefits[1].firstLine}</div>
                    <div className={style.item_number}>{benefits[1].secondLine}</div>
                    <div className={style.item_text}>{benefits[1].thirdLine}</div>
                </li>
                <li className={`${style.item} ${style.item3}`}>
                    <div className={style.item_text}>{benefits[2].firstLine}</div>
                    <div className={style.item_number}>{benefits[2].secondLine}</div>
                    <div className={style.item_text}>{benefits[2].thirdLine}</div>
                </li>
                <li className={`${style.item} ${style.item4}`}>
                    <div className={style.item_text}>{benefits[3].firstLine}</div>
                    <div className={style.item_number}>{benefits[3].secondLine}</div>
                    <div className={style.item_text}>{benefits[3].thirdLine}</div>
                </li>
            </ul>
        </div>
    );
};
