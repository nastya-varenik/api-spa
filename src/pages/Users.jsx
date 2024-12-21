// Users.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Пользователи</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id} button component={Link} to={`/users/${user.id}`}>
            <ListItemAvatar>
              <Avatar src={`https://via.placeholder.com/150?text=${user.id}`} style={{ borderRadius: '0' }} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Users;  // Убедись, что экспортируешь по умолчанию
