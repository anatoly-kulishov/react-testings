import React, { useEffect, useState } from 'react';
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
    <div>
      {users.map((user: any) => <div key={user.id} data-testid="user-item">{user.name}</div>)}
    </div>
  );
};

export default Users;
