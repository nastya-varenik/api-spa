import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'; // Правильный импорт компонента Lottie
import { Typography, Button, Box } from '@mui/material';
import notFoundAnimation from '../assets/not-found-animation.json'; // Путь к вашей анимации

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Lottie animationData={notFoundAnimation} loop={true} autoplay={true} style={{ height: 400, width: 500 }} />
      <Typography variant="h4" gutterBottom color="secondary">Ой! Страница куда-то пропала</Typography>
      <Typography variant="body1" gutterBottom color="textSecondary">
        Кажется, вы забрели не туда. Не волнуйтесь, мы всегда рады вас видеть на главной странице! 😉
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Вернуться на главную
      </Button>
    </Box>
  );
};

export default NotFound;
