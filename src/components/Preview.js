import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Fab from "@mui/material/Fab";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { SaveAltOutlined } from "@mui/icons-material";
import { useMyContext } from "../context/Context";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";


// This is Preview Component of Your Resume Data  for particular  selected Tempalate******************

const Preview = () => {
  const Navigate = useNavigate();
  const {
    addData,    
    setPersonalField,
    setEducationField,
    setWorkExpField,
    setSkillsField,
  } = useMyContext();

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {sx:"100%",sm:'50%', md:'25%'},
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: "0px 0px 600px 500px #8c3e3a",
    p: 4,
    zIndex: "200",
    borderRadius: "20px",
    color: "black",
  };

  const PreviewResume = useSelector((state) => state.template.selectedTemplate);

  const [displayMsg, setDisplayMsg] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);

  function handleSaveClick() {
    setSuccessMsg(true);

    setTimeout(() => {
      addData(PreviewResume);
      Navigate("/my-resumes");
      setPersonalField("");
      setEducationField("");
      setWorkExpField("");
      setSkillsField("");
    }, 2000);
  }

  setTimeout(() => {
    setDisplayMsg(false);
  }, 2000);

  return (
    <div>
      {PreviewResume === null ? (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
          You are not selected any template, Nothing to Preview <br /> Please
          select a Template!
        </h2>
      ) : (
        <>
          {displayMsg && (
            <div>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Your Resume Successfully Created
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 5 }}>
                  This is an Preview Version of your Resume
                </Typography>
              </Box>
            </div>
          )}

          {successMsg && (
            <div style={{ position: "absolute", top: "80px", right: "10px" }}>
              <Alert variant="filled" severity="success">
                Your Resume is Successfully Saved —<strong> check it out!</strong>
              </Alert>
            </div>
          )}

          {/* container for Save and Edit Button (Save Button Effect to Save your Resume  and Edit button is make Changes in your resume )******************************* */}
          <Container
            xs={{ top: "1000px", left: "100px" }}
            key={PreviewResume.id}
            sx={{ position: "relative" }}
          >
            <Box sx={{marginLeft: "40px"}} id="resume-pre">{PreviewResume.rTemp}</Box>
            <Box
              className="btnresponsive"
              sx={{
                height: "100px",
                p: 2,
                display: "flex",
                position: "absolute",
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                top: { xs: "75%", sm: "5%", md: "5%", lg:"5%" },
                right: { xs: "30%", sm: "15%", md: "10%", lg:"12%" },
                zIndex: "100",
              }}
            >
              <Fab
                onClick={() => {
                  Navigate("/details-filling-page/personal-details");
                }}
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 3,
                  marginLeft: "5px",
                  size: "medium",
                  marginTop: "10px",
                }}
                variant="extended"
                color="error"
                size="medium"
              >
                <KeyboardBackspaceIcon sx={{ marginRight: "5px" }} />
                EDIT
              </Fab>
              <Fab
                onClick={handleSaveClick}
                sx={{ fontWeight: "bold", letterSpacing: 3 }}
                variant="extended"
                color="success"
                size="medium"
              >
                <SaveAltOutlined sx={{ marginRight: "7px" }} />
                SAVE
              </Fab>
            </Box>
          </Container>
        </>
      )}
    </div>
  );
};

export default Preview;
