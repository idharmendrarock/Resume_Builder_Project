import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";
import "../../src/App.css";

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
          xs: "550px",
          md: "850px",
          lg: "1150px",
          xl: "1500px",
        },
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        textAlign: "left",
        marginTop: "100px",       
        height: "auto",
        border: " 2px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ backgroundColor: " #fcc4bd" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexdirection: "row",
            }}
          >
            <Box sx={{ marginTop: "1.2rem", marginLeft: "5%" }}>
              <img
                src={profileData}
                alt="No Profile"
                style={{ width: "120px", height: "120px" }}
              />
            </Box>
            <Stack
              sx={{
                paddingLeft: { xs: 0, sm: "1rem" },
                marginTop: "8%",
                marginLeft: "10%",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                {PersonalInfoData.FirstName} {PersonalInfoData.LastName}
              </Typography>
              {workExpData.length > 0 && (
                <Typography
                  variant="h6"
                  sx={{ color: "black", marginLeft: "20%" }}
                >
                  {workExpData[0].JobTitle}
                </Typography>
              )}
            </Stack>
          </Box>
          <Box sx={{ paddingTop: "0.5rem" }}>
            <div
              className="p-3"
              style={{
                fontSize: "16px",
                marginRight: "10px",
                marginLeft: "10px",
                paddingRight: "50%",
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
            </div>
          </Box>
        </Stack>

        <hr
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "5px",
            background: "#F08460",
          }}
        />

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "left",
              wordWrap: "break-word",
            }}
          >
            {PersonalInfoData.Objective}
          </Typography>
        </Stack>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#F08460",
          }}
        />

        <Box sx={{ padding: "1rem", background: "white", sm: 20 }}>
          <Typography
            variant="h6"
            sx={{ color: " #f87d6d", fontWeight: "bold", position: "relative" }}
          >
            Professional <br /> Experience
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column" },
            }}
          >
            {workExpData.map((elem, index) => (
              <div style={{ marginLeft: 200, bottom: "200px" }} key={index}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {elem.JobTitle}
                </Typography>
                I have some strong work experience that will help me with this
                job if I am successful.
                <Typography> I worked in {elem.OrganizationName}</Typography>
                <Typography>
                  {" "}
                  from {elem.StartYear} - {elem.EndYear}{" "}
                </Typography>
              </div>
            ))}
          </Stack>
        </Box>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#F08460",
          }}
        />

        <Box sx={{ padding: "1rem", background: "white" }}>
          <Typography
            variant="h6"
            sx={{ color: " #f87d6d", fontWeight: "bold" }}
          >
            Education
          </Typography>
          <div>
            <Typography sx={{ marginLeft: 25, fontWeight: "bold" }}>
              {educationData.Degree}
            </Typography>
            <Typography sx={{ marginLeft: 25 }}>
              {" "}
              I have persued my {educationData.Type}
            </Typography>
            <Typography sx={{ marginLeft: 25 }}>
              {" "}
              in {educationData.Degree} from {educationData.University}{" "}
              Duration: {educationData.StartYear} - {educationData.EndYear}
            </Typography>
          </div>
        </Box>

        <hr
          style={{
            width: "100%",
            marginTop: "0rem",
            height: "5px",
            background: "#F08460",
          }}
        />

        <Box sx={{ padding: "1rem", background: "white" }}>
          <Typography
            variant="h6"
            sx={{ color: " #f87d6d", fontWeight: "bold" }}
          >
            Key Skills
          </Typography>
          <div>
            {skillsData.map((elem, index) => (
              <Typography sx={{ marginLeft: 25 }} key={index}>
                {elem.skills}
              </Typography>
            ))}
          </div>
        </Box>
      </Box>
    </Paper>
  );
};

export default Templates1;
