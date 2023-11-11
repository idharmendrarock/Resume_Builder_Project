import React, { useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { educationDetailsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const Education = () => {
  const { educationField } = useMyContext();
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(currentYear);
  const [endYear, setEndYear] = useState(currentYear);

  // This handleStartYearChange function Gives a Option To Select  a year from start year input field *******

  const handleStartYearChange = (event) => {
    const newStartYear = parseInt(event.target.value);
    setStartYear(newStartYear);
    // Ensure end year is greater than or equal to the selected start year
    if (newStartYear > endYear) {
      setEndYear(newStartYear);
    }
  };

  // This handleEndYearChange function Gives a Option To Select  a year from end year input field *******

  const handleEndYearChange = (event) => {
    const newEndYear = parseInt(event.target.value);
    setEndYear(newEndYear);
  };

  // const EducationDetails = useSelector((state) => state.eduDetail.eduDetails);

  const dispatch = useDispatch();
  const Navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: educationField,
  });

  // This onSubmit Function is used to dispatch form data to redux store for further operation  also This function navigate user to next formfield******************

  const onSubmit = (data) => {
    const FormData = data;
    dispatch(educationDetailsAction(FormData));
    Navigate("/details-filling-page/work-experience");
  };



  return (
    <div>
      <>
        <Box
          container
          component="form"
          sx={{
            width: {
              xs: "350px",
              md: "650px",
              lg: "850px",
              xl: "1050px",
            },
            height: "auto",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 0 20px 2px #0055ff" ,
            textAlign: "center",
            marginTop: "50px",
            backgroundColor: "white",         
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: "30px", mt: "20px", textTransform: "uppercase" }}
          >
            Education
          </Typography>

          <div>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginRight: "75%",
                marginTop: "20px",
              }}
            >
              Details :
            </Typography>
            <Divider
              sx={{
                backgroundColor: "rgb(151, 149, 149)",
                ml: "40px",
                mb: "30px",
                width: "88%",
              }}
            />

            <Grid className="Responsive" container
            >
              <Grid item xs={12} sm={6} >
                <TextField
                  label="Type "
                  type="text"
                  variant="outlined"
                  sx={{ width: "90%", margin: "20px" }}
                  {...register("Type", {
                    required: "This Field is required!",
                  })}
                />
                {errors.Type && (
                  <p style={{ color: "red" }}>{errors.Type.message}</p>
                )}
              </Grid>

              <Grid item xs={12} sm={6} >
                <TextField
                  label="University "
                  type="text"
                  variant="outlined"
                  sx={{ width: "90%", margin: "20px" }}
                  {...register("University", {
                    required: "This Field is required!",
                  })}
                />
                {errors.University && (
                  <p style={{ color: "red" }}>{errors.University.message}</p>
                )}
              </Grid>

              <Grid item xs={12} sm={6} >
                <TextField
                  label="Degree"
                  type="text"
                  variant="outlined"
                  sx={{ width: "90%", margin: "20px" }}
                  {...register("Degree", {
                    required: "This Field is required!",
                  })}
                />
                {errors.Degree && (
                  <p style={{ color: "red" }}>{errors.Degree.message}</p>
                )}
              </Grid>

              <Grid item xs={12} sm={6} >
                <TextField
                  label="StartYear"
                  type="number"
                  variant="outlined"
                  sx={{ width: "90%", margin: "20px" }}
                  {...register("StartYear", {
                    required: "This Field is required!",
                  })}
                  onChange={handleStartYearChange}
                  select
                  SelectProps={{ native: true }}
                >
                  {Array.from({ length: currentYear - 1900 + 1 }, (_, index) => (
                    <option
                      style={{ color: "black" }}
                      key={index}
                      value={currentYear - index}
                    >
                      {currentYear - index}
                    </option>
                  ))}
                </TextField>

                {errors.StartYear && (
                  <p style={{ color: "red" }}>{errors.StartYear.message}</p>
                )}
              </Grid>

              <Grid item xs={12} sm={12} >
                <TextField
                  label="EndYear"
                  type="number"
                  variant="outlined"
                  sx={{ width: "50%", margin: "20px" }}
                  {...register("EndYear", {
                    required: "This Field is required",
                  })}
                  onChange={handleEndYearChange}
                  select
                  SelectProps={{ native: true }}
                >
                  {Array.from(
                    { length: currentYear - startYear + 0 },
                    (_, index) => (
                      <option
                        style={{ color: "black" }}
                        key={index}
                        value={startYear + index}
                      >
                        {startYear + index}
                      </option>
                    )
                  )}
                </TextField>

                {errors.EndYear && (
                  <p style={{ color: "red" }}>{errors.EndYear.message}</p>
                )}
              </Grid>
            </Grid>
          </div>

          <Divider
            sx={{
              backgroundColor: "rgb(151, 149, 149)",
              ml: "40px",
              mb: "30px",
              mt: "20px",
              width: "88%",
            }}
          />
          <Button
            onClick={() => Navigate("/details-filling-page/personal-details")}
            variant="contained"
            sx={{
              backgroundColor: "black",
              mt: "10px",
              fontWeight: "bold",
              mr: "50px",
            }}
          >
            Back
          </Button>
          <Button            
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
          >
            Next
          </Button>
        </Box>
      </>
    </div>
  );
};

export default Education;
