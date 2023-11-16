import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { TempImg } from "../data/Data";
import Home from "./Home";

// Dashboard For Displaying  All Templates *********************************************

const Main = () => {
	return (
		<div sx={{ display: "flex", flexWrap: "wrap" }}>
			<Box
				sx={{
					marginTop: "100px",
					marginLeft: "70px",
					height: "100px",
					width: {
						xs: 230,
					},
				}}>
				<Typography
					sx={{
						fontSize: "30px",
						fontWeight: "bold",
						// ":hover": { color: "grey" },
					}}>
					TEMPLATES
				</Typography>
				<Typography sx={{ color: "", justifyContent: { xs: "center" } }}>
					Select Template To Get Started
				</Typography>
			</Box>
			
 {/* Passing all the tempalate images data to tempGrid Component as a Props ********************** */}

			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
				}}>
				{TempImg &&
					TempImg.map((img) => {
						return <Home img={img} key={img.id} />;
					})}
			</Container>
		</div>
	);
};

export default Main;
