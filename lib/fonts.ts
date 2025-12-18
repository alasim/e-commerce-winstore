// src/app/ui/fonts.ts (optional, can be in layout.tsx)
import localFont from 'next/font/local';

export const centurygothic = localFont({
    src: [
        {
            // public\fonts\centurygothic.ttf
            path: '../../public/fonts/centurygothic.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/centurygothic_bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-centurygothic', // Define a CSS variable
    display: 'swap',
});
