import { useEffect, useState } from "react";
import { getUsers, createUser } from "../services/userService";
import { toast } from "react-toastify";

function Users() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      return toast.error("All fields are required");
    }

    await createUser(formData);
    toast.success("User created!");
    setFormData({ name: "", email: "", role: "" });
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <h3>Create User</h3>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <select
            name="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>
        </div>

        <div className="col-12">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>

      <h4>User List</h4>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u.id} className="list-group-item">
            {u.name} | {u.email} | {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;