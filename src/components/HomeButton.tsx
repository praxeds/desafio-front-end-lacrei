export default function Button({ BtnClass, title }: any) {
    return (
            <a className={BtnClass}>{title}</a>
    )
}