import styled from "styled-components";
import { styles } from "../globalStyles";

export const ProfissionalSection = styled.main`
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
            padding-left: 1rem;
            border-left: 5px solid ${styles.colors.accent};
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