import styled from "styled-components";
import { Mixins } from '../Styles/GlobalStyles';

export const NavSection = styled.nav`
background: ${Mixins.colors.lightGray};
${Mixins.flex("row", "space-between", "center")};
padding: 0.5rem 4rem;
letter-spacing: -0.5px;
h1 {
    ${Mixins.text(2, 700)};
    cursor: pointer;
    margin: 0;
    color: ${Mixins.colors.green};
    ${Mixins.transition("all", "0.2s", "ease")};
    &:hover {
        color: ${Mixins.colors.lightGreen};
    }
}
ul {
    ${Mixins.flex("row", "flex-end", "center", "2.6rem")};
    list-style: none;
    margin: 0;
    padding: 0;
    ${Mixins.text(1, 700)};
    color: ${Mixins.colors.black};
    li>a {
        ${Mixins.resetLink()};
        ${Mixins.transition("all", "0.2s", "ease")};
        cursor: pointer;
        &:hover {
            color: ${Mixins.colors.gray};
        }
        &:active, &:focus {
            color: ${Mixins.colors.green};
        }
        &.active {
            color: ${Mixins.colors.green};
            &:hover {
                color: ${Mixins.colors.lightGreen};
            }
        }
    }
}
@media (max-width: 1040px) {
    padding: 0.5rem 2rem;
}
@media (max-width: 520px) {
    ${Mixins.flex("column", "space-between", "center")};
    ul {
        ${Mixins.flex("row", "flex-end", "center", "1rem")};
        ${Mixins.text(0.9, 700)};
    }
}
`;

export const FooterSection = styled.footer`
    margin: 0px 4rem;
    border-top: 1px solid ${Mixins.colors.lightGreen};
    padding: 2rem 0px 0.5rem;
    height: 10rem;
    -webkit-box-pack: justify;
    ${Mixins.flex("column", "space-between", "flex-start")}
    div {
        ${Mixins.flex("row", "flex-start", "flex-start")}
        gap: 2.5rem;
        a {
            cursor: pointer;
            ${Mixins.resetLink()}
            ${Mixins.transition("all", "0.2s", "ease")}
        }
        &.nav {
            a {
                color: ${Mixins.colors.black};
                &:hover {
                    color: ${Mixins.colors.gray};
                }
                &.active, &:focus {
                    font-weight: 700;
                }
            }
        }
        &.icons {
            gap: 2rem;
            a {
                ${Mixins.flex("row", "center", "center")}
                &:hover {
                    filter: brightness(1.4) saturate(0.5);
                }
            }
        }
    }
    p {
        ${Mixins.text(0.75, 400)};
        color: ${Mixins.colors.gray};
    }
    @media (max-width: 520px) {
        margin: 0px 1rem;
        padding-top: 1rem;
        div.nav {
            flex-direction: column;
            gap: 0.25rem;
            a {
                ${Mixins.text(0.875, 400)};
            }
        }
    }
    @media (max-width: 1040px) {
        margin: 0px 2rem;
    }
`;