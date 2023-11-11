import React from "react";
import "./style.css";
import { Box, Stack, Container, List, ListItemButton } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";

// This DetailFilling component is used to displaying detailsfilling pages**********************

const DetailsFilling = () => {
  return (
    <div>
      <Container sx={{ display: { md: "flex" }, mt: "70px" }}>
        <Box>
          <Stack
            sx={{
              width: "300px",
              borderRadius: "20px",
              boxShadow: "0 0px 20px 2px #0055ff",
              padding: "20px",
              backgroundColor: "white",
              margin: "50px",
            }}
          >
            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  to={"/details-filling-page/personal-details"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    margin: "8px",
                  }}
                >
                  <PersonIcon sx={{ mr: "10px" }} />
                  Personal Details
                </NavLink>
              </ListItemButton>
            </List>

            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  to={"/details-filling-page/education"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <SchoolIcon sx={{ margin: "10px" }} />
                  Education
                </NavLink>
              </ListItemButton>
            </List>

            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  to={"/details-filling-page/work-experience"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <WorkHistoryIcon sx={{ margin: "10px" }} />
                  Work Experience
                </NavLink>
              </ListItemButton>
            </List>

            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  to={"/details-filling-page/key-skills"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <AssignmentIcon sx={{ margin: "10px" }} />
                  Key Skills
                </NavLink>
              </ListItemButton>
            </List>
          </Stack>
        </Box>

        {/* Routes Path To particular form Sections ******************************* */}

        <Routes>
          <Route exact path="/personal-details" element={<PersonalInfo />} />
          <Route exact path="/work-experience" element={<WorkExperience />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/key-skills" element={<KeySkills />} />
        </Routes>
      </Container>
    </div>
  );
};

export default DetailsFilling;
