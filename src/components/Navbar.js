import {
	AppBar,
	Toolbar,
	useMediaQuery,
	useTheme,
	Typography,
	Tabs,
	Tab,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import DrawerComp from "./pages/DrawerComp";
import "../components/pages/style.css";





// Almabatter Dark and White Logo ********************************************************

const NavBar = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<AppBar
			position="fixed"
			sx={{ backgroundColor: "White" }}>

{/* Almabetter Logo for Desktop view And Responsive View **************************************/}

			<Toolbar>
				{isMatch ? (
					<>
						<Typography variant="h6" flexGrow={1}>							
							<img
								src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
								height="60px"
								alt="AlmaBetter"
							/>							
						</Typography>

{/* Introducing DrawerComponent for Responsive View **********************************/}

						<DrawerComp />
					</>
				) : (
					<>
						<Typography variant="h6" flexGrow={1}>							
							<img
								src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
								height="60px"
								alt="AlmaBetter"
							/>							
						</Typography>

{/* Navbar links for Different Pages *************************************************/}

						<Tabs sx={{ marginLeft: "auto" }}>
							<Tab
								sx={{ color: "black" }}
								component={NavLink}
								exact
								to={"/"}
								label="Resume Templates"
							/>
							<Tab
								sx={{ color: "black" }}
								component={NavLink}
								to={"/my-resumes"}
								label="My Resumes"
							/>
							<Tab
								sx={{ color: "black" }}
								component={NavLink}
								to={"/about-us"}
								label="About Us"
							/>
						</Tabs>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
