// Will have a stack with image, description, tech stack, contact info

// This stack is responsive and will change to become full length on a smaller screen
import Grid from '@mui/material/Grid2';
import huimin from '../assets/huimin-cropped.webp';
import Contact from './Contact';

function LeftAbout() {
  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 4, md: 12 }}
        columns={1}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          src={huimin}
          alt="Profile picture"
          style={{
            width: '100%',
            // height: '100%',
            transform: 'scaleX(-1)',
            borderRadius: '50%',
            aspectRatio: '1/1',
            maxWidth: '230px',
            maxHeight: '250px',
          }}
        />
      </Grid>
      <Contact />
    </Grid>
  );
}

export default LeftAbout;
