import { Typography, Link, Box } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Copyright = () => {
  return (
    <Typography variant="body2" mxb={0} color="text.secondary">
      {'Copyright © '}
      {'Me, duh '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          mx: 1,
          mb: 1
        },
      }}
    >
      <Link href="mailto:ade.d.balogun@gmail.com">
        <EmailIcon />
      </Link>
      <Link href="https://github.com/Baloguna16">
        <GitHubIcon />
      </Link>
      <Link href="https://twitter.com/Ade_in_myLife">
        <TwitterIcon />
      </Link>
      <Link href="https://https://www.linkedin.com/in/adekunle-balogun-284b39116/">
        <LinkedInIcon />
      </Link>
      <Typography variant="body1">
        I like to move it, move it.
      </Typography>
      <Copyright />
    </Box>
  );
}
