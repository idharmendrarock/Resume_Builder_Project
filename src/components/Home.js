import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplateAction } from "../Redux/Index";

//  This is tempGrid Box for displaying Designs of Different Tempalates**********************

const Home = (props) => {
  const { rTemp, id } = props.img;
  const tempValues = { rTemp, id };

  const dispatch = useDispatch();

  const [showButton, setShowButton] = useState(false);
  const handleMouseOver = () => {
    setShowButton(true);
  };
  const handleMouseOut = () => {
    setShowButton(false);
  };

  const onSubmit = () => {
    dispatch(setTemplateAction(tempValues));
  };

  return (
    <div>
      <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        sx={{
          cursor: "pointer",
          position: "relative",
          borderRadius: "10px",
          margin: "20px 10px",
        }}
      >
        <img
          style={{
            height: "365px",
            width: "265px",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 1px black",
          }}
          src={props.img.image}
          alt="tempImg"
        />
        {/* Use Template button is  used To Select a Particular Tempalate *********************** */}

        {showButton && (
          <Button
            onClick={onSubmit}
            component={Link}
            to={"/details-filling-page/personal-details"}
            sx={{
              position: "absolute",
              zIndex: "150",
              top: "160px",
              left: "65px",
            }}
            variant="contained"
          >
            Use Template
          </Button>
        )}
        {showButton && (
          <Box
            sx={{
              backgroundColor: "black",
              zIndex: "100",
              height: "365px",
              width: "265px",
              position: "absolute",
              top: "0px",
              opacity: ".5",
              borderRadius: "10px",
            }}
          ></Box>
        )}
      </Box>
    </div>
  );
};

export default Home;
