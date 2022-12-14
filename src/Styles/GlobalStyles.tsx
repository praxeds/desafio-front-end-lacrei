import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
`;

export const Mixins = {
    colors: {
        white: '#fff',
        black: '#1f1f1f',
        gray: '#6c6c6c',
        lightGray: '#eeeeee',
        green: '#018762',
        lightGreen: '#4eab91',
    },
    text: (size: number, weight: number = 400) => `
        font-size: ${size}rem;
        font-weight: ${weight};
    `,
    flex: (direction: string, justify: string, align: string, gap: string = '0') => `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `,
    transition: (property: string, time: string, ease: string) => `
        transition: ${property} ${time} ${ease};
    `,
    resetLink: () => `
        text-decoration: none;
        color: inherit;
    `,
    resetList: () => `
        list-style: none;
    `
};