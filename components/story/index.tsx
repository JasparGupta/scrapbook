import Event from '@components/event';
import { Event as EventType } from '@lib/types';
import { FC } from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
    events: EventType[],
    id: string,
    title: string,
}

const Story: FC<Props> = ({events, title}) => {
    return (
        <Card className="border-0 shadow">
            <Card.Header>
                <p className="lead mb-0">{title}</p>
            </Card.Header>

            <Card.Body>
                {events.map(event => <Event key={event.id} {...event}/>)}
            </Card.Body>

            <Card.Footer>

            </Card.Footer>
        </Card>
    );
};

export default Story;
