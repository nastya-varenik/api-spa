import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: '1rem', textAlign: 'center', marginTop: 'auto' }}>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1rem 0' }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">Create by: Nastya</Typography>
        <Typography variant="body2">BSU 2024</Typography>
      </Box>
    </Box>
  );
};

export default Footer;