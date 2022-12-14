import { NavLink } from "react-router-dom";

export default function Button({ BtnClass, title, to }: any) {
    return (
            <NavLink to={to} className={BtnClass}>{title}</NavLink>
    )
}