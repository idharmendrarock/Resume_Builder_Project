import React from "react";

import { Box, Typography, Paper, Divider, List } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";


const Template_3 = () => {
  //  In this Section We are Getting all data with the help  of useSelector which is stored in redux store like personalInfo Data , EducationData , WorkExperienceData and KeyskillData **************

 
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
    <div className="Responsive">
      <Paper
        sx={{
          marginTop: "10%",
          marginLeft: 50,
          width: {
            xs: "400px",
            sm: "550px",
            md: "500",
            lg: "550px",
            xl: "580px",
          },
          height: {
            xs: "600px",
            sm: "850px",
            md: "700px",
            lg: "850px",
            xl: "800px",
          },
        }}
      >
        <Box sx={{ backgroundColor: "#5AC0E6" }}>
          <Stack
            sx={{
              width: 100,
              height: 230,
              display: " flex",
              justifycontent: "space-between",
              alignitems: "flex-start",
              padding: "20px 20px 0px",
              marginbottom: "30%",
            }}
          >
            {/* Profile look */}
            <Box
              sx={{
                display: "flex",
                justifycontent: "flex-start",
                alignitems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "150%",
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifycontent: "centre",
                  alignItems: "centre",
                  overflow: "hidden",
                }}
              >
                <img src={profileData} alt="No Profile" />
              </Stack>
              {/* F&L Name Look           */}
              <Stack>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontsize: "100px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginLeft: "20px",
                    position: "absolute",
                  }}
                >
                  {PersonalInfoData.FirstName + " " + PersonalInfoData.LastName}
                </Typography>
              </Stack>
              {/* job Title Look  */}

              {workExpData?.map((elem) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{
                      fontsize: "5px",
                      color: "white",
                      fontWeight: "600",
                      position: "absolute",
                      marginTop: "48px",
                      marginLeft: "120px",
                    }}
                  >
                    {elem.JobTitle}
                  </Typography>
                );
              })}
            </Box>

            {/* AddLook  */}
            <Stack sx={{ marginLeft: "380px", position: "absolute" }}>
              <Typography
                sx={{
                  color: "#EAFFE6",
                  position: "absolute",
                }}
              >
                {PersonalInfoData.City} <br />
                {PersonalInfoData.State}
                <br />
                {PersonalInfoData.PinCode} <br />
                {PersonalInfoData.Address}
                <br />
                {PersonalInfoData.MobileNo} <br />
                {PersonalInfoData.Email}
              </Typography>
            </Stack>

            {/* Objectivelook  */}

            <Box>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "25px",
                  width: 530,
                  marginRight: "20px",
                  border: "none",
                }}
              ></Divider>
              <p style={{ color: "white" }}>
                {PersonalInfoData.Objective}
              </p>
              <Divider
                sx={{
                  backgroundColor: "white",
                  width: 530,
                  marginRight: "20px",
                  border: "none",
                }}
              ></Divider>
            </Box>

            {/* Experience section  */}

            <Box sx={{ marginTop: "48px" }}>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  color: "#5AC0E6",
                  fontWeight: "bold",
                  marginLeft: "6px",
                }}
              >
                Profession experience
              </Typography>
              <hr
                style={{
                  width: "510px",
                  marginTop: "30px",
                  height: "3.5px",
                  background: "#5AC0E6",
                }}
              />

              {workExpData &&
                workExpData.map((info) => {
                  return (
                    <List
                      sx={{
                        position: "absolute",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {info.JobTitle}
                      <List sx={{ fontWeight: 5, fontSize: "15px" }}>
                        {info.OrganizationName}{" "}
                        {info.StartYear - +" " + info.EndYear}
                      </List>
                    </List>
                  );
                })}
            </Box>
            {/* Education Section: */}

            <Box sx={{ marginTop: "150px" }}>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  color: "#5AC0E6",
                  fontWeight: "bold",
                  marginLeft: "6px",
                }}
              >
                Education
              </Typography>
              <hr
                style={{
                  width: "510px",
                  marginTop: "30px",
                  height: "3.5px",
                  background: "#5AC0E6",
                }}
              />
              <List
                sx={{
                  position: "absolute",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {educationData.Type}
                <List sx={{ fontWeight: 5, fontSize: "15px" }}>
                  {educationData.University}
                  {educationData.Degree}{" "}
                  {educationData.StartYear - +"" + educationData.EndYear}
                </List>
              </List>
            </Box>

            {/* SkillsSection:  */}

            <Box sx={{ marginTop: "150px" }}>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  color: "#5AC0E6",
                  fontWeight: "bold",
                  marginLeft: "6px",
                }}
              >
                Skills
              </Typography>
              <hr
                style={{
                  width: "510px",
                  marginTop: "30px",
                  height: "3.5px",
                  background: "#5AC0E6",
                }}
              />
              {skillsData &&
                skillsData.map((info) => {
                  return (
                    <ul>
                      <li style={{ fontsize: "50px" }}>{info.skills}</li>
                    </ul>
                  );
                })}
            </Box>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Template_3;
