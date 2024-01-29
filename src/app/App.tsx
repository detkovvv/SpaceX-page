import { type FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import style from './App.module.css';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { Main } from '../components/Main/Main';
import { Navbar } from '../components/Navbar/Navbar';
import { mockData } from '../utils/mockData';
import { type Data } from '../utils/types';

export const App: FC = () => {
    const data: Data = mockData;

    const backgroundImage = {
        backgroundImage: `url(${data.backgroundImage})`,
    };

    return (
        <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onReset={() => {
                location.reload();
            }}
        >
            <div className={style.app} style={backgroundImage}>
                <Navbar logo={data.logo} menu={data.menu} />
                <Main benefits={data.benefits} header={data.header} />
            </div>
        </ErrorBoundary>
    );
};
