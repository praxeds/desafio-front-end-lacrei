import styled from "styled-components";
import { styles } from "../stylesheets/globalStyles";

export const FooterSection = styled.footer`
    margin: 0px 4rem;
    border-top: 1px solid ${styles.colors.accentLightest};
    padding: 2rem 0px 0.5rem;
    height: 10rem;
    -webkit-box-pack: justify;
    ${styles.flex("column", "space-between", "flex-start")}

    div {
        ${styles.flex("row", "flex-start", "flex-start")}
        gap: 2.5rem;
        a {
            cursor: pointer;
            ${styles.resetLink()}
            ${styles.transition("all", "0.2s", "ease")}
        }
        &.nav {
            a {
                color: ${styles.colors.secondaryDark};
                &:hover {
                    color: ${styles.colors.secondaryLight};
                }
                &.active, &:focus {
                    font-weight: 700;
                }
            }
        }
        &.icons {
            gap: 2rem;
            a {
                ${styles.flex("row", "center", "center")}
                ${styles.text(2, 400)};
                color: ${styles.colors.accent};
                &:hover {
                    color: ${styles.colors.accentLight};
                }
            }
        }
    }
    p {
        ${styles.text(0.75, 400)};
        color: ${styles.colors.secondaryMedium};
    }

    @media (max-width: 520px) {
        margin: 0px 1rem;
        padding-top: 1rem;

        div.nav {
            flex-direction: column;
            gap: 0.25rem;
            a {
                ${styles.text(0.875, 400)};
            }
        }
    }

    @media (max-width: 1040px) {
        margin: 0px 2rem;
    }
`;