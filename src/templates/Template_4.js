import React from "react";
import { Box, Typography,Paper,Divider,List } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";
import { useMyContext } from "../context/Context";
import "../../src/App.css";
const Template_4 = () => {
  //  In this Section We are Getting all data with the help  of useSelector which is stored in redux store like personalInfo Data , EducationData , WorkExperienceData and KeyskillData **************

  const { mode } = useMyContext();
  const PersonalInfoData = useSelector(
    (state) => state.personalInfo.personalInfoValues
  );
  const profileData = useSelector((state) => {
    return state.profile.profileInfovalue;
  });
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
    <Box sx={{ backgroundColor: "#813737" }}>
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
                sx={{ color: "white", marginLeft: "20%" }}
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
              marginLeft: "20%",
              color:"white"
              // paddingRight: "50%",
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
    </Box>
    <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "1rem",
              backgroundColor:  "#813737" ,
              color:"white"
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

      <Box sx={{ padding: "20px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#813737 ",
            fontWeight: "bold",
          }}
        >
          Professional Experience
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#813737 ",
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
              color:  "#813737 ",
              fontWeight: "bold",
            }}
          >
            Education
          </Typography>
          <Divider
            sx={{
              backgroundColor:  "#813737 ",
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
              color:  "#813737 ",
              fontWeight: "bold",
            }}
          >
            Skills
          </Typography>
          <Divider
            sx={{
              backgroundColor:  "#813737 ",
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

export default Template_4;
