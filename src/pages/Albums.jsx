import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Альбомы</Typography>
      <List>
        {albums.map(album => (
          <ListItem key={album.id} button component={Link} to={`/albums/${album.id}`}>
            <ListItemIcon>
              <FolderIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={album.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Albums;