import { Typography} from '@mui/material';
import { Canvas } from '../components/gol';

export const Error404 = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        {'Sorry, you missed this page. It was just here, looking for you.'}
      </Typography>
    </div>
  );
}
