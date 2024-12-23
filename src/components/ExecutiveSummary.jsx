import React from 'react';
import { TextField, Box, Typography ,Button } from '@mui/material';
import {Link} from 'react-router-dom'

const ExecutiveSummary = ({ setSummary ,summary }) => {
  return (
    <div id="executive-summary">
          <Box sx={{ marginBottom: '20px' }} width={"25rem"}>
      <Typography variant="h4" gutterBottom color='black' fontWeight={'bold'}>
        Executive Summary
      </Typography>
        <TextField
            label=" Brief Summary..." 
          fullWidth
          rows={10}
        value={summary}
          multiline 
          
        variant="outlined"
        placeholder="Write a summary of the proposal..."
        onChange={(e) => setSummary(e.target.value)}
        sx={{ padding: '10px' }}
      />
    </Box>
    </div>
  );
};

export default ExecutiveSummary;
