import styled from "styled-components";
import {styles} from "../globalStyles";

export const NavbarSection = styled.nav`
    background: ${styles.colors.secondary};
    ${styles.flex("row", "space-between", "center")};
    padding: 0.5rem 4rem;
    letter-spacing: -0.5px;
    h1 {
        ${styles.text(2, 700)};
        cursor: pointer;
        margin: 0;
        color: ${styles.colors.accent};
        ${styles.transition("all", "0.2s", "ease")};

        &:hover {
            color: ${styles.colors.accentLight};
        }
    }
    ul {
        ${styles.flex("row", "flex-end", "center", "2.6rem")};
        list-style: none;
        margin: 0;
        padding: 0;
        ${styles.text(1, 700)};
        color: ${styles.colors.secondaryDark};
        li>a {
            ${styles.resetLink()};
            ${styles.transition("all", "0.2s", "ease")};
            cursor: pointer;
            &:hover {
                color: ${styles.colors.secondaryLight};
            }
            &:active, &:focus {
                color: ${styles.colors.accent};
            }
        }
    }
    @media (max-width: 1040px) {
        padding: 0.5rem 2rem;
    }

    @media (max-width: 520px) {
        ${styles.flex("column", "space-between", "center")};

        ul {
            ${styles.flex("row", "flex-end", "center", "1rem")};
            ${styles.text(0.9, 700)};
        }
    }
`;