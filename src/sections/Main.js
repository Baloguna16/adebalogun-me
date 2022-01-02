import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import WaveEmoji from '../components/WaveEmoji';

export const Main = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Hey, I'm Ade
        <WaveEmoji />
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        {'This is my website! You\'re welcome to say if you would like. '}
        {'I\'m Nigerian-American and from New Jersey. '}
        {'I\'m a recent grad from Columbia Engineering (2020, wooo). '}
      </Typography>
      <Typography variant="h5" component="p" mt={3} gutterBottom>
        {'And I like to make stuff!'}
      </Typography>
    </div>
  );
}
