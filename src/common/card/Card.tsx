import './Card.scss';

interface ICardProps {
    title: string;
    children: React.ReactNode;
}

/**
 * Card component
 * @param props The props.
 * @returns {JSX.Element} The component.
 */
export default function Card(props: ICardProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <div className="card-content">{props.children}</div>
            </div>
        </div>
    );
}