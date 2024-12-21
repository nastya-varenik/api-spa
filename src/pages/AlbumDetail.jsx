// AlbumDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then(response => response.json())
      .then(data => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [id]);

  if (!album || !user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>{album.title}</Typography>
      <Typography variant="body1">Создатель: <Link to={`/users/${user.id}`}>{user.name}</Link></Typography>
      <Typography variant="h5" gutterBottom>Фотографии</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={2}>
        {photos.map(photo => (
          <Box key={photo.id} style={{ borderRadius: '0', overflow: 'hidden' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default AlbumDetail;  // Убедись, что используешь export default
