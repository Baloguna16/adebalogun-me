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
      <Typography variant="h4" gutterBottom>
        Hey, I'm Ade
        <WaveEmoji />
      </Typography>
      <Typography variant="h6" gutterBottom>
        {'This is my website! You\'re welcome to stay if you would like. '}
        {'I\'m a Nigerian-American from New Jersey, and '}
        {'I recently graduated from Columbia Engineering (2020, wooo)! '}
      </Typography>
      <Typography variant="h6" mt={3} gutterBottom>
        {'I like to make stuff!'}
      </Typography>
    </div>
  );
}
