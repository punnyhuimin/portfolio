import { Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ReactIcon from '../../icons/ReactIcon';
import { Javascript } from '@mui/icons-material';
import TypescriptIcon from '../../icons/TypescriptIcon';
import PlaywrightIcon from '../../icons/PlaywrightIcon';
import ArcGISIcon from '../../icons/ArcGISIcon';
import JestIcon from '../../icons/JestIcon';
import RollupIcon from '../../icons/RollupIcon';
import ReduxIcon from '../../icons/ReduxIcon';
import figma from '../../assets/Figma-logo.png';
import python from '../../assets/Python-logo.png';
import azure from '../../assets/Azure-logo.png';
import PowerBIIcon from '../../icons/PowerBIIcon';
import SAPIcon from '../../icons/SAPIcon';

interface ExperienceCardRightProps {
  company: string;
  position: string;
  description: string[];
  techstack: string[];
}

const imgToIcon = (src: string, altText: string) => {
  return (
    <img
      src={src}
      alt={altText}
      style={{
        width: '100%',
        aspectRatio: '1/1.33',
        maxWidth: '20px',
        maxHeight: '20px',
      }}
    />
  );
};

const techstackIcon = (tech: string) => {
  switch (tech) {
    case 'React':
      return <ReactIcon />;
    case 'TypeScript':
      return <TypescriptIcon />;
    case 'Javascript':
      return <Javascript />;
    case 'ArcGIS':
      return <ArcGISIcon />;
    case 'Playwright':
      return <PlaywrightIcon />;
    case 'Rollup':
      return <RollupIcon />;
    case 'Jest':
      return <JestIcon />;
    case 'PowerBI':
      return <PowerBIIcon />;
    case 'Redux':
      return <ReduxIcon />;
    case 'SAP':
      return <SAPIcon />;
    case 'Figma':
      return imgToIcon(figma, 'Figma logo');
    case 'Python':
      return imgToIcon(python, 'Python logo');
    case 'Azure':
      return imgToIcon(azure, 'Azure logo');
    default:
  }
};

const ExperienceCardRight = (props: ExperienceCardRightProps) => {
  const { company, position, description, techstack } = props;
  return (
    <Grid
      container
      // spacing={1}
      sx={{ flexDirection: 'column', color: 'text.secondary' }}
    >
      <Grid size={12}>
        {company === 'SAP' ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://community.sap.com/t5/technology-blogs-by-sap/gamification-with-sap-analytic-application-analytics-designer/ba-p/13525039"
          >
            {position + ' at ' + company}
          </a>
        ) : (
          <a>{position + ' at ' + company}</a>
        )}
      </Grid>
      <Grid size={12}>
        {/* <ul style={{ width: '100%' }}> */}
        <p
          style={{
            filter: 'brightness(65%)',
          }}
        >
          {description}
          {/* {description.map(
            (val) => ({ val }),
            // <li key={val}>{val}</li>
          )} */}
        </p>
        {/* </ul> */}
      </Grid>
      <Grid
        container
        size={12}
        spacing={1}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        {techstack.map((tech) => (
          <Tooltip title={tech} key={tech}>
            <div style={{ paddingRight: 2 }}>{techstackIcon(tech)}</div>
          </Tooltip>
        ))}
      </Grid>
    </Grid>
  );
};

export default ExperienceCardRight;
