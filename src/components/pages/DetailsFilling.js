import React from "react";
import "./style.css";
import { Box, Stack, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PersonalInfo from "../formsDetails/PersonalInfo";
import WorkExperience from "../formsDetails/WorkExperience";
import Education from "../formsDetails/Education";
import KeySkills from "../formsDetails/KeySkills";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import { useMyContext } from "../../context/Context";

// This DetailFilling component is used to displaying detailsfilling pages**********************

const DetailsFilling = () => {
  const { mode } = useMyContext();

  return (
    <div>
      <Container sx={{ display: { md: "flex" }, mt: "70px" }}>
        <Box
          sx={{
            width: "300px",
            height: "auto",
            mr: { md: "5%" },
            ml: { md: "0px" },
          }}
        >
          <Stack
            sx={{
              width: "300px",
              height: "220px",
              backgroundColor: { mode },
              borderRadius: "10px",
              boxShadow: "0 0px 20px 2px ",
              p: "20px",
              marginTop: "50px",
            }}
          >
            <ul className="ul-list">
              <li className="list">
                <NavLink
                  to={"/details-filling-page/personal-details"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: mode === "light" ? "black" : "white",
                  }}
                >
                  <PersonIcon sx={{ mr: "10px" }} />
                  Personal Details
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/education"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: mode === "light" ? "black" : "white",
                  }}
                >
                  <SchoolIcon sx={{ mr: "10px" }} />
                  Education
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/work-experience"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: mode === "light" ? "black" : "white",
                  }}
                >
                  <WorkHistoryIcon sx={{ mr: "10px" }} />
                  Work Experience
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/details-filling-page/key-skills"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    color: mode === "light" ? "black" : "white",
                  }}
                >
                  <BuildIcon sx={{ mr: "10px" }} />
                  Key Skills
                </NavLink>
              </li>
            </ul>
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
