import styled from "styled-components";
import { styles } from "../globalStyles";

export const MainSection = styled.main`
    ${styles.flex("row", "space-between", "flex-start")};
    width: 100%;
    -webkit-box-pack: justify;
    padding: 4rem 4rem 0px;
    div {
        max-width: 540px;
        h2 {
            ${styles.text(3, 700)};
            color: ${styles.colors.secondaryDark};
        }
        p {
            ${styles.text(1.5, 400)};
            color: ${styles.colors.secondaryMedium};
            line-height: 2rem;
            margin-top: 2rem;
        }
        .btnContainer {
            ${styles.flex("row", "space-between", "center", "0")};
            -webkit-box-pack: justify;
            -webkit-box-align: center;
            padding-top: 3rem;
            max-width: 453px;

            a {
                ${styles.resetLink()};
                ${styles.text(1.125, 700)};
                border-radius: 0.5rem;
                box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
                ${styles.transition("all", "0.2s", "ease")};
                
                &.userBtn {
                    padding: 0.75rem 2rem;
                    background-color: ${styles.colors.accent};
                    color: ${styles.colors.primary};

                    &:hover {
                        background-color: ${styles.colors.accentLight};
                    }
                }
                
                &.proBtn {
                    padding: 0.625rem 2.75rem;
                    color: ${styles.colors.accent};
                    background-color: ${styles.colors.primary};
                    border: 2px solid ${styles.colors.accent};

                    &:hover {
                        color: ${styles.colors.accentLight};
                        border: 2px solid ${styles.colors.accentLight};
                    }
                }
            }
        }
        img {
            width: 100%;
            aspect-ratio: auto 555 / 421;
            height: 421px;
        }
        
    }

    @media (max-width: 1040px) {
        ${styles.flex("column", "center", "center")};
        padding: 2rem 2rem 0px;

        div {
            h2 {
                ${styles.text(2, 700)};
            }
            p {
                ${styles.text(1, 400)};
                line-height: 1.5rem;
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 520px) {
        padding: 1rem 1rem 0px;

        div {
            .btnContainer {
                flex-direction: column;
                gap: 1rem;
            }
            h2 {
                ${styles.text(1.5, 700)};
            }
            p {
                ${styles.text(0.875, 400)};
                line-height: 1.25rem;
                margin-top: 0.875rem;
            }
        }
    }

`;