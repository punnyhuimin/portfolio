// Will have a stack with image, description, tech stack, contact info

// This stack is responsive and will change to become full length on a smaller screen

import Grid from '@mui/material/Grid2';
import ExperienceCard from './experienceCard/ExperienceCard';

import experience from './experience.json' with { type: 'json' };
import { useTheme } from '@mui/material';
import Footer from '../Footer';

function RightAbout() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <b
          style={{
            fontSize: '12px',
            color: theme.palette.primary.contrastText,
          }}
        >
          ABOUT
        </b>
        <Grid size={12} color={'text.secondary'}>
          <a
            style={{
              filter: 'brightness(65%)',
            }}
          >
            My name is Hui Min, and I am based in Singapore. I am a Senior
            Software Engineer at Defence Science and Technology Agency (DSTA),
            specialising in{' '}
          </a>
          <b
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            frontend development.
          </b>
          <br />
          <br />
          <a
            style={{
              filter: 'brightness(65%)',
            }}
          >
            My interest in web development was sparked during my time with
            Corning. From doing data analytics to churning data insights on a
            web application, I found immense fulfillment seeing my work come to
            life. I sought out multiple internship opportunities to hone my web
            development skills thereafter.
            <br />
            <br />
            Currently, I am working full time on C3 defence solutions to build
            up Singapore&apos;s technological edge in the defence sector.
            Previously, I created a standardised icon library to ease the
            process of design standardisation across Singapore&apos;s defence
            solutions.
            <br />
            <br />
            When I&apos;m off work, I enjoy hitting the gym or watching Rotten
            Mango. Still trying to make the perfect latte art.
          </a>
        </Grid>
      </Grid>
      <Grid size={12}>
        <b
          style={{
            fontSize: '12px',
            color: theme.palette.primary.contrastText,
          }}
        >
          EXPERIENCE
        </b>
        <Grid container spacing={4} size={12}>
          {experience.map((exp, index) => {
            return (
              <ExperienceCard
                key={exp.timePeriod + index}
                timePeriod={exp.timePeriod}
                company={exp.company}
                position={exp.position}
                description={exp.description}
                techstack={exp.techstack}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default RightAbout;
