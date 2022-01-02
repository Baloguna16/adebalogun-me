import { Typography} from '@mui/material';
import { Canvas } from '../components/gol';

export const Error404 = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h6" gutterBottom>
        {'Sorry, you missed this page. It was just here, looking for you.'}
      </Typography>
    </div>
  );
}
