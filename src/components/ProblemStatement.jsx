import React from 'react';
import { TextField, Box, Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'

const ProblemStatement = ({ setProblem , problem }) => {
  return (
    <div id="problem-statement">
       <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }} width={"25rem"}>
      <Typography variant="h4" color='black' fontWeight={'bold'} gutterBottom>
        Problem Statement
      </Typography>

      <TextField
        label="Describe the problem"
        multiline
          rows={15}
          value={problem}
        variant="outlined"
        fullWidth
        onChange={(e) => setProblem(e.target.value)}
        margin="normal"
      />
      <Button 
  variant="contained" 
  component={Link} 
          to="/obj"
          fullWidth
>
  Next
</Button>
    </Box>
     </div>
  );
};

export default ProblemStatement;
