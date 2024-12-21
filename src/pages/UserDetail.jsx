import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndAlbums = async () => {
      try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const albumsResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        setUser(userResponse.data);
        setAlbums(albumsResponse.data);
      } catch (error) {
        setError(error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndAlbums();
  }, [id, navigate]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>{user.name}</Typography>
      <Typography variant="body1"><EmailIcon fontSize="small" /> Email: {user.email}</Typography>
      <Typography variant="body1"><PersonIcon fontSize="small" /> Username: {user.username}</Typography>
      <Typography variant="body1"><LanguageIcon fontSize="small" /> Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></Typography>
      <Typography variant="h5" gutterBottom>Альбомы</Typography>
      <List>
        {albums.map(album => (
          <ListItem key={album.id} button component={Link} to={`/albums/${album.id}`}>
            <ListItemIcon>
              <FolderIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={album.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserDetail;