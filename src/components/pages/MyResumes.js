import React from "react";
import { Box } from "@mui/system";
import Fab from "@mui/material/Fab";
import { DownloadDoneOutlined } from "@mui/icons-material";
import { DeleteForeverOutlined } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { TextField, Container, Typography } from "@mui/material";
import { useMyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./style.css";

// MyResume Component Shows Your Saved Resumes *************************************

const MyResumes = () => {
  const Navigate = useNavigate();

  const [downFileName, setDownFileName] = useState("");

  const { resumeTemplate } = useMyContext();

  // This handleDelete function to delete Saved  Resume******************************

  function handleDelete() {
    localStorage.clear();
    window.location.reload();
  }

  function onChange(e) {
    setDownFileName(e.target.value);
  }

  async function handleDownloadFile() {
    const content = document.getElementById("resume-Temp");
    html2canvas(content)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "px", "a4");
        var width = pdf.internal.pageSize.getWidth() * 1.570;
        var height = pdf.internal.pageSize.getHeight() * 1
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save(`${downFileName}.pdf`);

        setDownFileName("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This input style object is used  to styling inputfield*******************************

  const inputStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& label": {
      color: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
    },
  };

  return (
    <div>
      {/* This Part will Show a Message when there is no Saved Resume Found ************************ */}

      {!resumeTemplate ? (
        <Container
          sx={{
            display: "flex-column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "red",
              marginTop: "85px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            😞Oops !{" "}
            <p style={{ marginLeft: "60px", fontSize: "1.6rem" }}>
              No any Resume....
            </p>
          </Typography>

          <Typography
            subtitle1="h6"
            sx={{
              color: "blue",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            You do not have any Resumes yet. Make One to view it here.
          </Typography>

          {/* Link path To create New Resume from Dashboard ***********************************/}

          <Typography
            className="Blink"
            variant="h6"
            onClick={() => {
              Navigate("/");
            }}
            sx={{
              color: "#cc0099",
              cursor: "pointer",
              marginTop: "20px",
              // textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            👉Click Here !👈
          </Typography>

          <Box sx={{ mt: "30px" }}>
            <img
              style={{
                borderRadius: "25px",
                // boxShadow: "0px 0px 5px 1px grey",
                width: "60%",
                height: "400px",
              }}
              src="./images/MyResume.png"
              alt="No Any Resume"
            />
          </Box>
        </Container>
      ) : (
        <>
          {/* This Part Will allow you To Download Resume or Delete it *************************** */}
          <Box
            key={resumeTemplate.id}
            sx={{ position: "relative", marginTop: "100px" }}
          >
            <Box
              sx={{ marginLeft: { xs: "5%", sm: "10%", md: "10%", lg: "10%" } }}
              id="resume-Temp"
            >
              {resumeTemplate.rTemp}
            </Box>
            <Box
              className="dwnresponsive"
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: { xs: "75%", sm: "0", md: "0", lg: "0" },
                right: { xs: "30%", sm: "10%", md: "5%", lg: "8%" },
                height: "200px",
                justifyContent: "space-around",
              }}
            >
              <TextField
                sx={inputStyle}
                onChange={onChange}
                variant="outlined"
                label="EnterFileName"
                type={"text"}
              />

              <Fab
                onClick={handleDownloadFile}
                variant="extended"
                size="medium"
                color="primary"
              >
                <DownloadDoneOutlined sx={{ mr: 1 }} />
                DOWNLOAD
              </Fab>
              <Fab
                onClick={handleDelete}
                variant="extended"
                size="medium"
                color="primary"
              >
                <DeleteForeverOutlined sx={{ mr: 2 }} />
                DELETE
              </Fab>
            </Box>
          </Box>
          ;
        </>
      )}
    </div>
  );
};

export default MyResumes;
