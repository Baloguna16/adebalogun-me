import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import WaveEmoji from '../../components/emojis/WaveEmoji';

export const Main = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hey, I'm Ade
        <WaveEmoji />
      </Typography>
      <Typography variant="h6" gutterBottom>
        {'This is my website! You\'re welcome to stay if you would like. '}
        {'I\'m Nigerian-American, from New Jersey, and '}
        {'did environmental engineering at Columbia (2020, wooo)! '}
      </Typography>
      <Typography variant="h6" mt={3} gutterBottom>
        {'I like to make stuff!'}
      </Typography>
    </div>
  );
}
