// Time period, Company, Description

import ExperienceCardLeft from './ExperienceCardLeft';
import ExperienceCardRight from './ExperienceCardRight';
import Grid from '@mui/material/Grid2';

interface ExperienceCardProps {
  timePeriod: string;
  company: string;
  position: string;
  description: string[];
  techstack: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { timePeriod, company, position, description, techstack } = props;
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
    >
      <Grid size={{ xs: 12, md: 3 }}>
        <ExperienceCardLeft timePeriod={timePeriod} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <ExperienceCardRight
          company={company}
          position={position}
          description={description}
          techstack={techstack}
        />
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
