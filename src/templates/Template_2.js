import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";

const Template_2 = () => {
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
          marginLeft: "20%",
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
        <Box sx={{ backgroundColor: "#DBD1E8" }}>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Profile Image */}
                <img src={profileData} alt="No Profile" />{" "}
              </Box>
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
                  <div>
                    <Typography variant="h4">
                      {PersonalInfoData.FirstName} {PersonalInfoData.LastName}
                    </Typography>
                    {workExpData.map((elem, index) => (
                      <Typography key={index} variant="h6" sx={{ color: "black" }}>
                        {elem.JobTitle}
                      </Typography>
                    ))}
                  </div>
                </Typography>
              </Stack>
              {/* job title look */}
              {/* <Typography
                variant="h6"
                sx={{
                  fontsize: "5px",
                  color: "white",
                  fontWeight: "500",
                  position: "absolute",
                  marginTop: "70px",
                  zIndex: "20",
                  marginLeft: "165px",
                  color: "black",
                }}
              >
                front end developer
              </Typography> */}
            </Box>
            {/* Adress look  */}
            <Stack sx={{ marginLeft: "460px", position: "absolute" }}>
              <div>
                <Typography>{PersonalInfoData.Email}</Typography>
                <Typography>{PersonalInfoData.MobileNo}</Typography>
                <Typography>{PersonalInfoData.Address}</Typography>
                <Typography>{PersonalInfoData.PinCode}</Typography>
                <Typography>{PersonalInfoData.State}</Typography>
                <Typography>{PersonalInfoData.City}</Typography>
              </div>
            </Stack>
            {/* objective section  */}
            <hr
              style={{
                width: "600px",
                marginTop: "63px",
                height: "5px",
                backgroundColor: "red",
              }}
            />
            <Typography>{PersonalInfoData.Objective}</Typography>
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
              <div>
                <Typography
                  variant="h6"
                  sx={{ color: "#3284F0", fontWeight: "bold" }}
                >
                  Professional Experience
                </Typography>
                <div style={{
                  marginLeft: "220px",
                  position: "absolute",
                  fontWeight: "bold",
                  padding: "5px",
                  fontSize: "22px",
                }} >
                  {workExpData.map((elem, index) => (
                    <div key={index}>
                      <Typography>{elem.JobTitle}</Typography>
                      <Typography>{elem.OrganizationName}</Typography>
                      <Typography>
                        {elem.StartYear} - {elem.EndYear}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
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
              <div>
                <Typography
                  variant="h6"
                  sx={{ color: "#3284F0", fontWeight: "bold" }}
                >
                  Education
                </Typography>

                <div
                  style={{
                    marginLeft: "220px",
                    position: "absolute",
                    fontWeight: "bold",
                    padding: "5px",
                    fontSize: "22px",
                    alignItems: "center",
                  }}
                >
                  <Typography>{educationData.Type}</Typography>
                  <Typography>{educationData.University}</Typography>
                  <Typography>
                    {educationData.Degree} {educationData.StartYear} -{" "}
                    {educationData.EndYear}
                  </Typography>
                </div>
              </div>
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
              {/* Key Skills */}
              <Typography variant="h6" sx={{ color: "#3284F0", fontWeight: "bold" }}>Key Skills</Typography>
              <div style={{
                marginTop: "8px",
                alignItems: "center",
                marginLeft: "230px",
                position: "absolute",
                fontWeight: 5,
                padding: "5px",
                fontSize: "19px",
              }}>
                {skillsData.map((elem, index) => (
                  <Typography key={index}>{elem.skills}</Typography>
                ))}
              </div>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Template_2;