import React from "react";

import { Box, Typography, Paper,List } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";

import "../../src/App.css";

const Templates = () => {
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
  console.log(educationData);

  return (
    <div className="Responsive">
      <Paper
        sx={{
          marginTop: "4%",
          width: {
            xs: "400px",
            sm: "640px",
            md: "600",
            lg: "640px",
            xl: "640px",
          },
          height: {
            xs: "600px",
            sm: "900px",
            md: "700px",
            lg: "900px",
            xl: "850px",
          },
        }}
      >
        {/* paper styling end */}

        {/* Box  start for contain profile name and address         */}
        <Box sx={{ backgroundColor: "#EDA89A"}}>
          <Stack
            sx={{
              width: 155,
              height: 180,
              display: " flex",
              justifycontent: "space-between",
              alignitems: "flex-start",
              padding: "20px 20px 0px",
              marginbottom: "30%",
            }}
          >
            {/* profile image styling */}
            <Box
              sx={{
                display: "flex",
                justifycontent: "flex-start",
                alignitems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "110px",
                  height: 110,
                  borderRadius: "100%",
                  backgroundColor: "grey",
                  marginTop: "17px",
                  display: "flex",
                  justifycontent: "centre",
                  alignItems: "centre",
                  overflow: "hidden",
                }}
              >
                <img src={profileData} alt="No Profile" />
              </Stack>
              {/* Name section      */}
              <Stack>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontsize: "100px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    marginTop: "30px",
                    marginLeft: "28px",
                    position: "absolute",
                  }}
                >
                  {PersonalInfoData.FirstName + " " + PersonalInfoData.LastName}
                </Typography>
              </Stack>
              {/* job title look */}

              {workExpData?.map((elem) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{
                      fontsize: "5px",
                      color: "white",
                      fontWeight: "500",
                      position: "absolute",
                      marginTop: "70px",
                      zIndex: "3",
                      marginLeft: "170px",
                      color: "black",
                    }}
                  >
                    {elem.JobTitle}
                  </Typography>
                );
              })}
            </Box>
            {/* Adress look  */}
            <Stack sx={{ marginLeft: "435px", position: "absolute" }}>
              <Typography sx={{ color: "black" }}>
                {PersonalInfoData.Email} <br />
                {PersonalInfoData.MobileNo} <br />
                {PersonalInfoData.Address} <br />
                {PersonalInfoData.PinCode} <br />
                {PersonalInfoData.State} <br /> 
                {PersonalInfoData.City}
              </Typography>
            </Stack>
            {/* objective section  */}
            <hr
              style={{
                width: "600px",
                marginTop: "63px",
                height: "5px",
                background: "#F08460",
              }}
            />
            <Typography sx={{ color: "black"}}>
              {PersonalInfoData.Objective}
            </Typography>
            <hr
              style={{
                width: "600px",
                marginTop: "40px",
                height: "5px",
                background: "#F08460",
              }}
            />

            {/* experience section  */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ color: "#F08460", fontWeight: "bold" }}
              >
                Professional Experience
              </Typography>
              {workExpData &&
                workExpData.map((info) => {
                  return (
                    <List
                      sx={{
                        marginLeft: "220px",
                        position: "absolute",
                        fontWeight: "bold",
                        padding: "5px",
                        fontSize: "22px",
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
            </Stack>

            <hr
              style={{
                width: "600px",
                marginTop: "100px",
                height: "5px",
                background: "#F08460",
              }}
            />
            {/* education section  */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ color: "#F08460", fontWeight: "bold" }}
              >
                Education
              </Typography>
              <List
                sx={{
                  marginLeft: "220px",
                  position: "absolute",
                  fontWeight: "bold",
                  padding: "5px",
                  fontSize: "22px",
                }}
              >
                {educationData.Type}
                <List sx={{ fontWeight: 5, fontSize: "15px" }}>
                  {educationData.University}
                  {educationData.Degree}{" "}
                  {educationData.StartYear - +"" + educationData.EndYear}
                </List>
              </List>
            </Stack>
            <hr
              style={{
                width: "600px",
                marginTop: "120px",
                height: "5px",
                background: "#F08460",
              }}
            />
            {/* skills section  */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ color: "#F08460", fontWeight: "bold" }}
              >
                {" "}
                Key Skills
              </Typography>
              {skillsData &&
                skillsData.map((info) => {
                  return (
                    <ul
                      style={{
                        marginTop: "8px",
                        marginLeft: "230px",
                        position: "absolute",
                        fontWeight: 5,
                        padding: "5px",
                        fontSize: "19px", 
                        listStyle: "none",                       
                      }}
                    >
                      {skillsData &&
                skillsData.map((info) => {
                  return (
                    
                      <li>{info.skills}</li>
                    
                  );
                })}
                    </ul>
                  );
                })}
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Templates;
