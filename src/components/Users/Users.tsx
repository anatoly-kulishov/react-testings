import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  
  const loadUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
  }
  
  useEffect(() => {
    loadUsers();
  }, [])
  
  return (
    <div data-testid="users-page">
      {users.map((user: any) => (
        <span key={user.id}>
          <Link
            to={`/users/${user.id}`}
            data-testid="user-item">
            {user.name}
          </Link> |{" "}
        </span>
      ))}
    </div>
  );
};

export default Users;