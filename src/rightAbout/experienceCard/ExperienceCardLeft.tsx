import Grid from '@mui/material/Grid2';
interface ExperienceCardLeftProps {
  timePeriod: string;
}

const ExperienceCardLeft = (props: ExperienceCardLeftProps) => {
  const { timePeriod } = props;
  return (
    <Grid size={12} sx={{ paddingRight: 1 }}>
      {timePeriod}
    </Grid>
  );
};

export default ExperienceCardLeft;
