import { type Data } from './types';

export const mockData: Data = {
    menu: [
        { id: crypto.randomUUID(), name: 'Главная' },
        { id: crypto.randomUUID(), name: 'Технология' },
        { id: crypto.randomUUID(), name: 'График полетов' },
        { id: crypto.randomUUID(), name: 'Гарантии' },
        { id: crypto.randomUUID(), name: 'О компании' },
        { id: crypto.randomUUID(), name: 'Контакты' },
    ],
    logo: './icons/logo.png',
    backgroundImage: './images/background.png',
    header: {
        mainTitle: 'путешествие',
        title: 'на красную планету',
        headersButton: 'Начать путешествие',
    },
    benefits: [
        {
            id: crypto.randomUUID(),
            firstLine: 'Мы',
            secondLine: '1',
            thirdLine: 'на рынке',
        },
        {
            id: crypto.randomUUID(),
            firstLine: 'календарик за',
            secondLine: '2001',
            thirdLine: 'в подарок',
        },
        {
            id: crypto.randomUUID(),
            firstLine: 'Гарантируем',
            secondLine: '50%',
            thirdLine: 'безопасности',
        },
        {
            id: crypto.randomUUID(),
            firstLine: 'Путешествие',
            secondLine: '597',
            thirdLine: 'дней',
        },
    ],
};
