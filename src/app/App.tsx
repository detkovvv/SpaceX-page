import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import style from './App.module.css';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { Main } from '../components/Main/Main';
import { Navbar } from '../components/Navbar/Navbar';

export const App = () => {
    return (
        <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onReset={() => {
                location.reload();
            }}
        >
            <div className={style.app}>
                <Navbar />
                <Main />
            </div>
        </ErrorBoundary>
    );
};
