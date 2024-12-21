import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ГАЛЕРЕЯ АЛЬБОМОВ
          </Typography>
          <Button color="inherit" component={Link} to="/">Пользователи</Button>
          <Button color="inherit" component={Link} to="/albums">Альбомы</Button>
        </Toolbar>
      </AppBar>
      <Box flexGrow={1} padding={2}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;