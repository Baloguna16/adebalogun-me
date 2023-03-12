import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ img, alt, title, description, href }) => {

  return (
    <Link href={href} underline="none">
      <Card
        sx={{
          display: 'flex',
          p: 3,
          boxShadow: 0,
          '&:hover': { backgroundColor: '#e6effa' },
        }}
       >
        <CardMedia
          component="img"
          sx={{ width: 140, height: 120, pr: 2 }}
          image={img}
          alt={alt}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
