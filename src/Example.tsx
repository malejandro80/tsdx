import React from 'react';
  import './tailwind.css';
    import { StyledEngineProvider } from '@mui/material';
import Button from '@mui/material/Button';
 
export const Test = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Button variant="contained" className="bg-slate-950 pt-8 text-2xl">
        Hello World
      </Button>
    </StyledEngineProvider>
  );
};

