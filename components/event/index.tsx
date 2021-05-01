import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import EventType from '../../lib/types/event-type';

interface Event {
    description?: string,
    id: string,
    title?: string,
    type: EventType,
}

const Event: FC<Event> = ({description, title}) => {
    return (
        <Card className="border-right-0">
            <Card.Header>
                {title}
            </Card.Header>

            <Card.Body>
                <p>{description}</p>
            </Card.Body>

            <Card.Footer>

            </Card.Footer>
        </Card>
    );
}

export default Event;
