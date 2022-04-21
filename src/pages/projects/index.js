import Typography from '@mui/material/Typography';
import { ArticleCard } from '../../components/ArticleCard';

import hubbubLogo from './assets/hubbub.jpg';
import pixelnautsLogo from './assets/pixelnauts.jpg';

export const Projects = () => {
  return (
    <div>
      <ArticleCard
        img={hubbubLogo}
        alt="Hubbub Logo"
        title="Hubbub"
        description="Browse a wide variety of items for you to rent along side hundreds of other young professionals in NYC."
        href="https://www.hubbub.shop"
      />
      <ArticleCard
        img={pixelnautsLogo}
        alt="Pixelnauts Logo"
        title="Pixelnauts Collection"
        description="A suite of pixelated assets and browser games built on top of the Solana Orcanaut Collection launched by Orca.so."
        href="https://www.orca.so/orcanauts"
      />
    </div>
  );
}
