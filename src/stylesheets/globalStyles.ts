export const styles = {
    colors: {
        primary: "#ffffff",
        secondary: "#eeeeee",
        secondaryDark: "#1f1f1f",
        secondaryLight: "#727272",
        secondaryMedium: "#515151",
        accent: "#018762",
        accentLight: "#4eab91",
        accentLightest: "#b0e0d3"
    },
    text: (size: number, weight: number) => `
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
    `
};