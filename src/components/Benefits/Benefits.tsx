import { type FC } from 'react';

import style from './Benefits.module.css';
import { Benefit } from '../Benefit/Benefit';

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
                {benefits.map((benefit) => {
                    return (
                        <Benefit
                            firstLine={benefit.firstLine}
                            key={benefit.id}
                            secondLine={benefit.secondLine}
                            thirdLine={benefit.thirdLine}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
