import React from 'react';
import { TextField, Typography, Button,Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectPlan = ({ setPlan ,plan }) => {
  return (
    <div id="project-plan">
      <Stack spacing={"1rem"} width={"400px"} >
        <Typography variant="h4" color='black' fontWeight={'bold'} gutterBottom>Project Design & Implementation Plan</Typography>
    <TextField 
  label="Describe the plan..." 
        multiline 
          rows={10} 
          value={plan}
  onChange={(e) => setPlan(e.target.value)} 
/>

      <Button 
  variant="contained" 
  component={Link} 
  to="/summary"
>
  Next
</Button>
      </Stack>
    </div>
  )
};

export default ProjectPlan;
