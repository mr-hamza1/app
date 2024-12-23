import React, { useState, useRef } from 'react';
import { Button, Container, Typography, Grid, Paper, Box } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js'
import TitlePage from './components/TitlePage';
import ExecutiveSummary from './components/ExecutiveSummary';
import ProblemStatement from './components/ProblemStatement';
import ObjectivesGoals from './components/ObjectivesGoals';
import ProjectPlan from './components/ProjectPlan';
import ProposalPreview from './components/ProposalPreview';
import { aut, submitted, titledata ,datedata ,pro,obj,summ,goaldata,plandata } from './components/Data';

function App() {
  const [title, setTitle] = useState(titledata);
  const [author, setAuthor] = useState(aut);
  const [submittedto, setsubmittedto] = useState(submitted);
  const [date, setDate] = useState(datedata);
  const [summary, setSummary] = useState(summ);
  const [problem, setProblem] = useState(pro);
  const [objectives, setObjectives] = useState(obj);
  const [goals, setGoals] = useState(goaldata);
  const [plan, setPlan] = useState(plandata);

  const proposalData = {
    title,
    author,
    submittedto,
    date,
    summary,
    problem,
    objectives,
    goals,
    plan,
  };

  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });



const handleDownload = () => {
  const element = document.getElementById("pdf-content"); // Make sure this element is rendered
  if (element) {
    const options = {
      filename: 'generated-document.pdf',
      html2canvas: { scale: 2 },  // Increase scale for better quality
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  } else {
    console.error("Content not found for PDF generation.");
  }
};





  return (
    <>
      <Grid container height={"calc(100vh - 4rem)"} sx={{
      }}>
        <Grid item md={5} height={"100%"}>
          <Container
            component={"main"}
            maxWidth="md"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgColor: "black",
            }}
          >
            <Paper elevation={6}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 4,
                flexDirection: "column",
              }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<TitlePage setTitle={setTitle} setAuthor={setAuthor} setsubmittedto={setsubmittedto} setDate={setDate}  />} />
                  <Route path="/summary" element={<ExecutiveSummary setSummary={setSummary} summary={summary} />} />
                  <Route path="/problem" element={<ProblemStatement setProblem={setProblem} problem={problem} />} />
                  <Route path="/obj" element={<ObjectivesGoals setObjectives={setObjectives} setGoals={setGoals} objectives={objectives} goals= {goals} />} />
                  <Route path="/plan" element={<ProjectPlan setPlan={setPlan} plan ={plan} />} />
                </Routes>
              </BrowserRouter>
            </Paper>
          </Container>
        </Grid>

        <Grid item md={7} height={"100%"}>
          <Container   sx={{ marginLeft: "10rem", width: "60rem" , marginBottom:"4rem" }}>
            <div ref={previewRef}>
              <ProposalPreview proposalData={proposalData} />
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePrint}
                style={{ marginRight: '10px' }}
              >
                Print Proposal
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDownload}
              >
                Download Proposal
              </Button>
            </div>
          </Container>
          <br /><br />          <br /><br />
          <br /><br />
         

        </Grid>
      </Grid>


    </>
  );
}

export default App;
