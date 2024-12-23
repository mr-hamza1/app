import React from 'react';
import { TextField, Grid, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const TitlePage = ({ setTitle, setAuthor, setDate }) => {
  return (
    <div id="title-page"> {/* Ensure this div has the correct ID */}
      <Stack spacing={"2rem"}  width={"400px"}>
        <Typography variant="h4" fontWeight={'bold'} color='black' gutterBottom>Title Page</Typography>
        <TextField
          label="Proposal Title"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          fullWidth
          onChange={(e) => setAuthor(e.target.value)}
        />

        <TextField
          label="Submitted To"
          fullWidth
          onChange={(e) => setsubmittedto(e.target.value)}
        />

        <TextField
          label="Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button
          variant="contained"
          component={Link}
          to="/problem"
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default TitlePage;
