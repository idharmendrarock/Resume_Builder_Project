import React from "react";
import {Typography, Paper, Grid } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";
import "../../src/App.css";


//  In this Section We are Getting all data with the help  of useSelector which is stored in redux store like personalInfo Data , EducationData , WorkExperienceData and KeyskillData **************

const Templates1 = () => {
  const PersonalInfoData = useSelector(
    (state) => state.personalInfo.personalInfoValues
  );
  const profileData = useSelector((state) => state.profile.profileInfovalue);
  const workExpData = useSelector((state) => state.workExp.workData);
  const educationData = useSelector((state) => state.eduDetail.eduDetails);
  const skillsData = useSelector((state) => state.skills.skillDetails);

  return (
    <Paper
      sx={{
        width: {
          xs: "400px",
          md: "650px",
          lg: "850px",
          xl: "1050px",
        },
        marginTop: "100px",
        height: "100%",
        border: "3px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      <Grid >
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center" sx={{ backgroundColor: "#762E8F"}}>

          <Grid
            sx={{
              marginTop: "30px",
            }}
          >
            <img
              src={profileData}
              alt="No Profile"
              style={{ width: "120px", height: "120px" }}
            />

          </Grid>

          <Grid
            sx={{
              marginTop: "25px",
              textAlign: "center"
            }}
          >
            <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
              {PersonalInfoData.FirstName} {PersonalInfoData.LastName}
            </Typography>
            {workExpData.length > 0 && (
              <Typography
                variant="h5"
                sx={{ color: "black", marginTop: "20px", letterSpacing:"3px"}}
              >
                {workExpData[0].JobTitle}
              </Typography>
            )}
          </Grid>

          <Grid
            sx={{
              marginTop: "30px",
            }}
          >
            <Typography>{PersonalInfoData.Email}</Typography>
            <Typography>{PersonalInfoData.MobileNo}</Typography>
            <Typography>
              {PersonalInfoData.Address}
              <br />
              {PersonalInfoData.City}
              <br />
              {PersonalInfoData.State}
              <br />
              {PersonalInfoData.PinCode}
            </Typography>
          </Grid>


          <hr
            style={{
              width: "100%",
              marginTop: "2rem",
              height: "5px",
              background: "#AE00EB",
            }}
          />

        </Grid>

        <Grid
          sx={{
            padding: "1rem",
            fontSize: "1.2rem",
            textAlign: "left",
            wordWrap: "break-word",
          }}
        >
          {PersonalInfoData.Objective}
        </Grid>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#AE00EB",
          }}
        />

        <Grid container
          direction="column"
          sx={{
            textAlign: "left",

          }}>
          <Grid>
            <Typography
              variant="h6"
              sx={{
                wordWrap: "break-word",
                padding: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#AE00EB",
              }}>
              Professional <br /> Experience :

            </Typography>

          </Grid>

          <Grid
            sx={{ fontSize: "1.2rem", marginLeft: "25%", marginBottom: "20px" }}
          >
            {workExpData.map((elem, index) => (
              <Stack key={index}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "5px" }}>
                  {elem.JobTitle}
                </Typography>
                <Typography>I have some strong work experience that will help me with this
                  job if I am successful.
                </Typography>
                <Typography sx={{ padding: "3px" }}> I worked in {elem.OrganizationName}</Typography>
                {" "}
                <Typography sx={{ fontWeight: "bold", padding: "3px" }}>{elem.StartYear} - {elem.EndYear}{" "}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#AE00EB",
          }}
        />

        <Grid>
          <Typography
            variant="h6"
            sx={{
              wordWrap: "break-word",
              padding: "1rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#AE00EB",
            }}
          >
            Education :
          </Typography>
          <Grid
            sx={{ fontSize: "1.2rem", marginLeft: "25%", marginBottom: "20px", marginRight: "10px" }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "5px" }}>
              {educationData.Degree}
            </Typography>
            <Typography sx={{padding: "3px" }}>
              {" "}
              
              I have persued my {educationData.Type}
            </Typography >
            <Typography sx={{padding: "3px"}}> in {" "}
            {educationData.Degree} from {educationData.University}
            </Typography>
            {" "}
            <Typography sx={{ fontWeight: "bold", padding: "3px" }} >
              Duration: {educationData.StartYear} - {educationData.EndYear}
            </Typography>

          </Grid>
        </Grid>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#AE00EB",
          }}
        />

        <Grid>
          <Grid>
            <Typography
              variant="h6"
              sx={{
                wordWrap: "break-word",
                padding: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#AE00EB",
              }}
            >
              Key Skills :
            </Typography>
          </Grid>
          <Grid sx={{
            marginLeft: "25%",
            marginBottom: "20px",
          }}>
            {skillsData.map((elem, index) => (
              <Typography sx={{ fontSize: "1.2rem", padding: "3px" }} key={index}>
                {elem.skills}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Templates1;
