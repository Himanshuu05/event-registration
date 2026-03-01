import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { getEvents } from "../services/eventService";
import { getRegistrations, createRegistration } from "../services/registrationService";
import { toast } from "react-toastify";

function Registrations() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const usersRes = await getUsers();
    const eventsRes = await getEvents();
    const regRes = await getRegistrations();

    setUsers(usersRes.data);
    setEvents(eventsRes.data);
    setRegistrations(regRes.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !eventId)
      return toast.error("Select both user and event");

    await createRegistration({ userId, eventId });
    toast.success("Registration successful!");
    setUserId("");
    setEventId("");
    fetchAll();
  };

  return (
    <div className="container mt-4">
      <h3>Register User</h3>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-5">
          <select
            className="form-select"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Select User</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-5">
          <select
            className="form-select"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
          >
            <option value="">Select Event</option>
            {events.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100">Register</button>
        </div>
      </form>

      <h4>Registrations</h4>
      <ul className="list-group">
        {registrations.map((r) => (
          <li key={r.id} className="list-group-item">
            User ID: {r.userId} | Event ID: {r.eventId} | Time: {r.registeredAt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registrations;