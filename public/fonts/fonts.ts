import localFont from 'next/font/local';
export const outfit = localFont({
    preload: true,
    display: "swap",
    variable: "--font-outfit",
    src: [
        {
            path: './Outfit/static/Outfit-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Outfit/static/Outfit-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Outfit/static/Outfit-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Outfit/static/Outfit-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Outfit/static/Outfit-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './Outfit/static/Outfit-Black.ttf',
            weight: '900',
            style: 'normal',
        },

    ],
});