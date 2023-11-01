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

  const { resumeTemplate, mode } = useMyContext();

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
        var ratio = canvas.width / canvas.height;
        var width = pdf.internal.pageSize.getWidth() * 2.5;
        var height = width / ratio;
        pdf.addImage(imgData, "JPEG", -340, 10, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save(`${downFileName}.pdf`);

        setDownFileName("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This input style object is used  to styling inputfield*******************************

  const inputStyle = {
    backgroundColor: mode === "light" ? "white" : "#072340",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: mode === "light" ? "black" : "white",
    },
    "& label": {
      color: mode === "light" ? "grey" : "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode === "light" ? "grey" : "white",
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
            variant="h5"
            sx={{
              color: "red",
              marginTop: "100px",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            No Resume is created yet
          </Typography>
          <Typography
            subtitle1="h6"
            sx={{
              color: "skyblue",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            please select template and built resume.
          </Typography>

          {/* Link path To create New Resume from Dashboard ***********************************/}

          <Typography
            variant="h6"
            onClick={() => {
              Navigate("/");
            }}
            sx={{
              color: "skyblue",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Click Here !
          </Typography>
          <Box sx={{ mt: "10px" }}>
            <img
              style={{
                borderRadius: "50px",
                boxShadow: mode === "dark" && "0px 0px 20px 5px grey",
                width: mode === "light" ? "25vw" : "25vw",
              }}
              src="./images/image2.jpg"
              alt="#"
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
            <Box id="resume-Temp">{resumeTemplate.rTemp}</Box>
            <Box
              className="dwnresponsive"
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: {xs:"150px", sm:'80px', md:'50px'},
                right: {xs:"30%", sm:'37%', md:'10%'},
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
