import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { SocialMediaImg } from "../../data/Data";
import { Link } from "react-router-dom";
import BlueLines from "../../Images/BlueLines.png"

//  This Media Icons component  Displaying Social Media Icons********************************

const MediaIcons = (props) => {
  console.log(props.img);
  return (
    <div>
      <Box sx={{ margin: "5px 10px" }}>
        <Link to={props.img.Link}>
          <img
            style={{ width: '30px' }}
            src={props.img.image}
            alt="IconImage"
          />
        </Link>
      </Box>
    </div>
  );
};

// About Us Content ***************************************************************************

const AboutUs = () => {
  return (
    <>
      <Container>
        <Grid container direction="row" alignItems="center" sx={{ mt: 8 }}>
          <Grid item xs={12} lg={6} order={{ xs: 1, sm: 1 }}>
            <Typography
              variant="h2"
              color="inherit"
              sx={{ mb: 4, mt: 4, fontFamily: "Segoe UI", fontWeight: "500" }}
            >
              Resume Builder
            </Typography>
            <img style={{ width: "70%", height: "30px" }} src={BlueLines} alt="BlueLineDevider" />
            <Typography
              marginBottom={5}
              variant="h6"
              color="inherit"
              textTransform={"capitalize"}
            >
              Hello! This Is Our Resume Builder Project And Meet My Group Members.
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "Blue",
                  letterSpacing: 2,
                }}
              >
                DHARMENDRA, ASHOK AND PRACHI.
              </Typography>
              Resume Builder Offers Free, HR-Approved Resume Templates To Help You Create A Professional Resume In Minutes. Choose From Some Of The Selected Templates That Can Land You To Your Dream Job. Create An Account To Save Your Progress And Multiple Versions, Plus Download As A PDF. Resume Builder Offers Free,HR-Approved Resume Templates To Help You Create A Professional Resume In Minutes. Choose From Sever
            </Typography>
          </Grid>
          <Grid
            container
            item
            lg={6}
            justifyContent="center"
            order={{ xs: 2, sm: 2 }}
          >
            <Box
              sx={{
                width: "80%",
                marginLeft: "100px",
                marginTop: "50px",
                marginBottom: "50px",
                borderRadius: "50px",
                display: "flex",
              }}
              component="img"
              src="./images/About.png"
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-end",
            width: "10%",
          }}
        >
          {SocialMediaImg &&
            SocialMediaImg.map((img) => {
              return <MediaIcons Link={img.Link} img={img} key={img.id} />;
            })}
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
