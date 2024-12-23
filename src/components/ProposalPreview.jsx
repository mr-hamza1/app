// import React from 'react';
// import { Typography, Paper ,Box ,Stack } from '@mui/material';

// const ProposalPreview = ({ proposalData }) => {
//   const { title, author, date,submittedto, summary, problem, objectives, goals, plan } = proposalData;

//   return (
//     <Paper id={"pdf-content"} elevation={10}
//   style={{ padding: "20px", backgroundColor: "white", color: "black" }} overflow={"auto"}  >
//       <Stack >
//               <Box alignItems={"center"} marginLeft={"9rem"} marginTop={"13rem"}>
//         <Typography variant="h4" >{title || "Proposal Title"} </Typography>
//        <Typography variant="h6" marginTop={"1rem"}><strong>Author:</strong> {author || "Author Name"}</Typography>
//       <Typography variant="h6" marginTop={"1rem"}><strong>Date:</strong> {date || "Date"}</Typography>
//       <Typography variant="h6" marginTop={"1rem"}><strong>Submitted to:</strong> {submittedto || "John smith"}</Typography>
//       </Box>
//    <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     
      
//       <Typography variant="h5" gutterBottom>Executive Summary :</Typography>
//       <Typography>&nbsp; &nbsp; &nbsp; &nbsp;{summary || "Summary of the proposal."}</Typography><br /> <br />
      
//       <Typography variant="h5" gutterBottom>Problem Statement :</Typography>
//       <Typography>&nbsp; &nbsp; &nbsp; &nbsp;{problem || "Details of the problem statement."}</Typography><br /> <br />
      
//       <Typography variant="h5" gutterBottom>Objectives and Goals</Typography>
//       <Typography variant="h5" gutterBottom>Objectives :</Typography>
//             <Typography>&nbsp; &nbsp; &nbsp; &nbsp;{objectives || "Objectives of the proposal."}</Typography><br /> <br />
//              <Typography variant="h5" gutterBottom>Goals :</Typography>
//       <Typography>&nbsp; &nbsp; &nbsp; &nbsp;{goals || "Goals of the proposal."}</Typography><br /> <br />
      
//       <Typography variant="h5" gutterBottom>Project Design & Implementation Plan</Typography>
//       <Typography>&nbsp; &nbsp; &nbsp; &nbsp;{plan || "Plan for implementation."}</Typography>
//      </Stack>
//     </Paper>
//   );
// };

// export default ProposalPreview;



import React from 'react';
import { Typography, Paper, Box, Stack } from '@mui/material';

const ProposalPreview = ({ proposalData }) => {
  const { title, author, date, submittedto, summary, problem, objectives, goals, plan } = proposalData;

  // Helper function to format text
  const formatTextWithBreaks = (text) => {
    return text
      ? text.split('.').map((sentence, index) => (
          sentence.trim() && (
            <Typography key={index} style={{ marginBottom: "1rem" }}>
              &nbsp; &nbsp; &nbsp; &nbsp;{sentence.trim()}.
            </Typography>
          )
        ))
      : "No content available.";
  };

  return (
    <Paper
      id="pdf-content"
      elevation={10}
      style={{ padding: "20px", backgroundColor: "white", color: "black" }}
    >
      <Stack >
            <Box alignItems={"center"} marginLeft={"9rem"} marginTop={"13rem"}>
        <Typography variant="h4" >{title || "Proposal Title"} </Typography>
       <Typography variant="h6" marginTop={"1rem"}><strong>Author:</strong> {author || "Author Name"}</Typography>
      <Typography variant="h6" marginTop={"1rem"}><strong>Date:</strong> {date || "Date"}</Typography>
      <Typography variant="h6" marginTop={"1rem"}><strong>Submitted to:</strong> {submittedto || "John smith"}</Typography>
      </Box>
   <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     
        {/* Content Sections */}
        <Box style={{ pageBreakInside: "avoid", marginTop: "2" }}>
          <Typography variant="h5" gutterBottom>Executive Summary :</Typography>
          {summary}
        </Box>

        <Box style={{ pageBreakInside: "avoid", marginTop: "3rem" }}>
          <Typography variant="h5" gutterBottom>Problem Statement :</Typography>
          {problem}
        </Box>

        <Box style={{ pageBreakInside: "avoid", marginTop: "3rem" }}>
          <Typography variant="h5" gutterBottom>Objectives and Goals</Typography>
          <Typography variant="h6" gutterBottom>Objectives :</Typography>
          {formatTextWithBreaks(objectives)}
        </Box>

        <Box style={{ pageBreakInside: "avoid", marginTop: "3rem" }}>
          <Typography variant="h6" gutterBottom>Goals :</Typography>
          {formatTextWithBreaks(goals)}
        </Box>

        <Box style={{ pageBreakInside: "avoid", marginTop: "3rem" }}>
          <Typography variant="h5" gutterBottom>Project Design & Implementation Plan</Typography>
          {formatTextWithBreaks(plan)}
        </Box>
      </Stack>
    </Paper>
  );
};

export default ProposalPreview;

