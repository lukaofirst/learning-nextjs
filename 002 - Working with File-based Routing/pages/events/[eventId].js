import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        );
    }

    const { title, date, location, image, description } = event;

    return (
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics
                date={date}
                address={location}
                image={image}
                imageAlt={title}
            />
            <EventContent>
                <p>{description}</p>
            </EventContent>
        </Fragment>
    );
};

export default EventDetailPage;
