import React from "react";
import { Box, Typography, Paper, Divider, List, Grid } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";

const Template_3 = () => {
  const PersonalInfoData = useSelector((state) => state.personalInfo.personalInfoValues);
  const profileData = useSelector((state) => state.profile.profileInfovalue);
  const workExpData = useSelector((state) => state.workExp.workData);
  const educationData = useSelector((state) => state.eduDetail.eduDetails);
  const skillsData = useSelector((state) => state.skills.skillDetails);

  return (
    <Paper
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        textAlign: "left",
        marginTop:"100px",
        width:"650px",
        border: " 2px solid rgba(0, 0, 0, 0.5)"
      }}
    >
      <Box sx={{ backgroundColor: "#5AC0E6" }}>
        <Stack sx={{ padding: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Stack
              sx={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img src={profileData} alt="No Profile" />
            </Stack>
            <Stack sx={{ ml: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                {PersonalInfoData.FirstName + " " + PersonalInfoData.LastName}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {workExpData[0]?.JobTitle}
              </Typography>
            </Stack>
        

          <Stack sx={{ mt: 2 }}>
            <Typography sx={{ color: "#EAFFE6",marginLeft:"20px" }}>
              {`${PersonalInfoData.City}, ${PersonalInfoData.State}`}
              <br />
              {PersonalInfoData.PinCode}
              <br />
              {PersonalInfoData.Address}
              <br />
              {PersonalInfoData.MobileNo}
              <br />
              {PersonalInfoData.Email}
            </Typography>
          </Stack>
            </Box>
          {/* </Box> */}
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ color: "white" }}>
              {PersonalInfoData.Objective}
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ padding: "20px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#5AC0E6",
            fontWeight: "bold",
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
              <Typography sx={{ fontWeight: "bold" }}>{info.JobTitle}</Typography>
              <Typography>{`${info.OrganizationName} (${info.StartYear} - ${info.EndYear})`}</Typography>
            </li>
          </ul>
        ))}

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#5AC0E6",
              fontWeight: "bold",
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
              <Typography sx={{ fontWeight: "bold" }}>{educationData.Degree}</Typography>
              <Typography>{`From ${educationData.University} (${educationData.StartYear} - ${educationData.EndYear})`}</Typography>
            </li>
          </List>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#5AC0E6",
              fontWeight: "bold",
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
            <ul style={{ marginLeft: "2.5rem" }} key={index}>
              <li>
                <Typography>{info.skills}</Typography>
              </li>
            </ul>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Template_3;