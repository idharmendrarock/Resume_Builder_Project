import React from "react";
import { Typography, Paper, Divider, List, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "../../src/App.css";



//  In this Section We are Getting all data with the help  of useSelector which is stored in redux store like personalInfo Data , EducationData , WorkExperienceData and KeyskillData **************

const Template_3 = () => {
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
        border: " 2px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      <Grid >
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center" sx={{ backgroundColor: "#49AED4", color: "white" }}>

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
                sx={{marginTop: "20px", color: "white", letterSpacing:"3px" }}
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

          <Grid
            sx={{
              padding: "1rem",
              fontSize: "1.2rem",
              textAlign: "left",
              wordWrap: "break-word",
              color: "white"
            }}
          >
            {PersonalInfoData.Objective}

          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ padding: "20px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#5AC0E6",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Professional Experience
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#5AC0E6",
            width: "100%",
            height: "3.5px",
          }}
        />
        {workExpData.map((info, index) => (
          <ul style={{ marginLeft: "2rem" }} key={index}>
            <li>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "5px" }}>
                {info.JobTitle}
              </Typography>
              <Typography sx={{ padding: "5px" }}>{`${info.OrganizationName} (${info.StartYear} - ${info.EndYear})`}</Typography>
            </li>
          </ul>
        ))}

        <Grid sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#5AC0E6",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Education
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#5AC0E6",
              width: "100%",
              height: "3.5px",
            }}
          />
          <List sx={{ marginLeft: "2rem" }}>
            <li>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {educationData.Degree}
              </Typography>
              <Typography sx={{ padding: "5px" }}>{`From ${educationData.University} (${educationData.StartYear} - ${educationData.EndYear})`}</Typography>
            </li>
          </List>
        </Grid>

        <Grid sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#5AC0E6",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Skills
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#5AC0E6",
              width: "100%",
              height: "3.5px",
            }}
          />
          {skillsData.map((info, index) => (
            <ul style={{ marginLeft: "2.5rem" , padding: "5px"}} key={index}>
              <li>
                <Typography sx={{ fontSize: "1.2rem", padding: "5px" }}>{info.skills}</Typography>
              </li>
            </ul>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Template_3;
