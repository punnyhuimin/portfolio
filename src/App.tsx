import './App.css';
import Grid from '@mui/material/Grid2';
import { useMediaQuery, useTheme } from '@mui/material';
import LeftAbout from './leftAbout/LeftAbout';
import RightAbout from './rightAbout/RightAbout';

const stickySx = {
  maxHeight: 'calc(100vh - 40px)',
  position: 'sticky',
  top: '40px',
  paddingRight: 5,
};

function App() {
  const theme = useTheme();
  const isSticky = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2, lg: 4 }}
      sx={{
        // display: 'flex',
        marginLeft: '10vw',
        marginRight: '10vw',
      }}
    >
      <Grid
        size={{ xs: 12, md: 3 }}
        sx={isSticky ? stickySx : { marginTop: 5 }}
      >
        <LeftAbout />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }} sx={isSticky ? { marginTop: 5 } : {}}>
        <RightAbout />
      </Grid>
    </Grid>
  );
}

export default App;
