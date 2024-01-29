import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorBoundary } from 'react-error-boundary';
import style from './App.module.css';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { Main } from '../components/Main/Main';
import { Navbar } from '../components/Navbar/Navbar';
import { mockData } from '../utils/mockData';
export const App = () => {
    const data = mockData;
    const backgroundImage = {
        backgroundImage: `url(${data.backgroundImage})`,
    };
    return (_jsx(ErrorBoundary, Object.assign({ FallbackComponent: FallbackComponent, onReset: () => {
            location.reload();
        } }, { children: _jsxs("div", Object.assign({ className: style.app, style: backgroundImage }, { children: [_jsx(Navbar, { logo: data.logo, menu: data.menu }), _jsx(Main, { benefits: data.benefits, header: data.header })] })) })));
};
