import React from 'react';
import { TextField, Typography, Button ,Grid ,Box} from '@mui/material';
import { Link } from 'react-router-dom'

const ObjectivesGoals = ({ setObjectives, setGoals ,Objectives , goals }) => {
  return (
    <div id="objectives-goals">
      <Typography variant="h4" color='black' fontWeight={'bold'} gutterBottom>Objectives and Goals</Typography>
      <Box width={"35rem"}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Objectives" 
            rows={10}
            value={Objectives}
            multiline
            fullWidth 
            onChange={(e) => setObjectives(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Goals"
            rows={10}
            value={goals}
            multiline
            fullWidth 
            onChange={(e) => setGoals(e.target.value)} 
          />
 
        </Grid>
                 <Button 
  variant="contained" 
  component={Link} 
            to="/plan"
          fullWidth
          sx={{
                      marginTop:"2rem"

          }}

>
  next
</Button>
      </Grid>
      </Box>
    </div>
  );
};

export default ObjectivesGoals;
