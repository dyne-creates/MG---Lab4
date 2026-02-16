import './App.css'


type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: string;
    registeredStudents: string[];
}
function EventCard({ eventName, venue, date, organizer, capacity, registeredStudents }: EventProps) {
    return (
        <>
            <div className="card">
                <h1 className="title">{eventName}</h1>
                <p><span>Venue:</span> {venue}</p>
                <p><span>Date:</span> {date}</p>
                <p><span>Organizer:</span> {organizer}</p>
                <p><span>Capacity:</span> {capacity}</p>
                <p><span>Registered Students:</span></p>
                <ul>
                    {registeredStudents.map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EventCard