import Grid from '@mui/material/Grid2';
import { IconButton, Typography } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

const Contact = () => {
  return (
    <Grid container size={{ xs: 8, md: 12 }} sx={{ color: 'text.secondary' }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h4">Pun Hui Min</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="subtitle1">Frontend Engineer</Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <a
          style={{
            filter: 'brightness(65%)',
          }}
        >
          I make websites work, one pixel at a time...
        </a>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }} sx={{ paddingTop: 1 }}>
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0, pr: 1 }}
          href="https://linkedin.com/in/punhuimin"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0, pr: 1 }}
          href="https://github.com/punnyhuimin"
        >
          <GitHub />
        </IconButton>
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0, pr: 1 }}
          href="mailto: punhuimin99@gmail.com"
        >
          <Mail />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Contact;
