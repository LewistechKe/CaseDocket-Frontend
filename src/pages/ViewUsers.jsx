import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/viewusers.css";
import { apiDomain } from "../utils/APIUtils";

function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiDomain}/Users`);
      if (response.ok) {
        const usersData = await response.json();
        console.log(usersData);
        setUsers(usersData);
      } else {
        throw new Error("An error occurred while fetching users.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>View Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Badge Number</th>
            <th>Password</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={i}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.badgeNumber}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <Link to="/editCase" className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUsers;
