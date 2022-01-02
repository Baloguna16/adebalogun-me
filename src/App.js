import { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { Main } from './sections';
import { Navbar, Footer, Error404, useAnalytics } from './base';

export const App = () => {
  useAnalytics();
  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Navbar />
        <Container
          component="main"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: [3, 6],
            mt: 1,
            mb: 2
          }}
          maxWidth="sm"
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/art" element={<Main />} />
            <Route path="/writing" element={<Main />} />
            <Route path="/projects" element={<Main />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Footer />
          </Container>
        </Box>
      </Box>
    </div>
  );
}
