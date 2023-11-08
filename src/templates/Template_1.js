import React from "react";
import { Box, Typography, Paper, List } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";
import "../../src/App.css";

const Templates = () => {
  const PersonalInfoData = useSelector(
    (state) => state.personalInfo.personalInfoValues
  );
  const profileData = useSelector((state) => state.profile.profileInfovalue);
  const workExpData = useSelector((state) => state.workExp.workData);
  const educationData = useSelector((state) => state.eduDetail.eduDetails);
  const skillsData = useSelector((state) => state.skills.skillDetails);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "1rem",
      
      
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "650px",
          padding: "1rem",
          marginTop: "70px",
          border: " 2px solid rgba(0, 0, 0, 0.5)"  ,
         
           
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
              <Box sx={{ marginTop: "1.2rem", marginLeft: ".2rem" }}>
                <img
                  src={profileData}
                  alt="No Profile"
                  style={{ width: "120px", height: "120px" }}
                />
              </Box>
              <Stack sx={{ paddingLeft: { xs: 0, sm: "1rem" } }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  {PersonalInfoData.FirstName} {PersonalInfoData.LastName}
                </Typography>
                {workExpData.length > 0 && (
                  <Typography variant="h6" sx={{ color: "black" }}>
                    {workExpData[0].JobTitle}
                  </Typography>
                )}
              </Stack>
            </Box>
            <Box sx={{ paddingTop: "0.5rem" }}>
              <div
                className="p-3"
                style={{ fontSize: "16px", marginRight: "10px" }}
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
              sx={{ color: "#3284F0", fontWeight: "bold" }}
            >
              Professional Experience
            </Typography>
            {workExpData.map((elem, index) => (
              <div style={{ marginLeft: 300, bottom: "200px" }} key={index}>
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
              sx={{ color: "#3284F0", fontWeight: "bold" }}
            >
              Education
            </Typography>
            <div>
              <Typography sx={{ marginLeft: 40, fontWeight: "bold" }}>
                {educationData.Degree}
              </Typography>
              <Typography sx={{ marginLeft: 40 }}>
                {" "}
                I have persued my {educationData.Type}
              </Typography>
              <Typography sx={{ marginLeft: 40 }}>
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
              sx={{ color: "#3284F0", fontWeight: "bold" }}
            >
              Key Skills
            </Typography>
            <div>
              {skillsData.map((elem, index) => (
                <Typography sx={{ marginLeft: 40 }} key={index}>
                  {elem.skills}
                </Typography>
              ))}
            </div>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Templates;