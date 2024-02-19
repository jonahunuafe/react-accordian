export default function AccordianItem({ title, children, className }) {
    return (
        <li className={className}>
            <h3>{title}</h3>
            <div>{children}</div>
        </li>
    );
}