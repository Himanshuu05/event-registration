import { useEffect, useState } from "react";
import { getEvents, createEvent } from "../services/eventService";
import { toast } from "react-toastify";

function Events() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    eventDate: ""
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.location || !formData.eventDate) {
      return toast.error("All fields are required");
    }

    await createEvent(formData);
    toast.success("Event created!");
    setFormData({ title: "", location: "", eventDate: "" });
    fetchEvents();
  };

  return (
    <div className="container mt-4">
      <h3>Create Event</h3>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            name="title"
            className="form-control"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <input
            name="location"
            className="form-control"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <input
            name="eventDate"
            type="date"
            className="form-control"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>

      <h4>Event List</h4>
      <ul className="list-group">
        {events.map((ev) => (
          <li key={ev.id} className="list-group-item">
            {ev.title} | {ev.location} | {ev.eventDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;