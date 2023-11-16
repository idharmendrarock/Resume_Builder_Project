import React, { useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { workExpAction } from "../../Redux/Index";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";
import { OnKeyPress } from "../OnKeyPress";



const WorkExperience = () => {
  const { workExpField } = useMyContext();

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
  const Navigate = useNavigate();

  // We are using useform Hook from React, This useform Hook is used to manage all forms states like register ,handleSubmit,error etc.***********************

  const {
    control,
    register,
    handleSubmit,
    formState: { errors},
  } = useForm({
    defaultValues: workExpField,
  });

  // This function Provides Functionality to control textfields by Adding New Field and removing selected ***************************************

  const { fields, append, remove } = useFieldArray({
    name: "WorkExperience",
    control,
  });

  
  OnKeyPress(append, "Enter");
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(workExpAction(data.WorkExperience));
    Navigate("/details-filling-page/key-skills");
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
            marginBottom:"20px",
            backgroundColor: "white",         
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: "40px", mt: "20px", textTransform: "uppercase" }}
          >
            Work Experience
          </Typography>

          {/* This Fields came from useFieldArray to Map all the textfields *********************** */}

          {fields.map((field, index) => (
            <div key={field.id}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "start",
                  ml: "40px",
                  mt: "40px",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Experience : {index + 1}
                </Typography>
              </Box>
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
                    label="JobTitle"
                    type="text"
                    varient="outlined"
                    sx={{ width: "90%", margin: "20px" }}
                    {...register(`WorkExperience[${index}].JobTitle`, {
                      required: "This Field is required!",
                    })}
                  />
                  {errors.JobTitle && (
                    <p style={{ color: "red" }}>{errors.JobTitle.message}</p>
                  )}
                </Grid>

                <Grid item xs={12} sm={6} >
                  <TextField
                    label="OrganizationName"
                    type="text"
                    varient="outlined"
                    sx={{ width: "90%", margin: "20px" }}
                    {...register(`WorkExperience[${index}].OrganizationName`, {
                      required: "This Field is required!",
                    })}
                  />
                  {errors.OrganizationName && (
                    <p style={{ color: "red" }}>
                      {errors.OrganizationName.message}
                    </p>
                  )}
                </Grid>

                <Grid item xs={12} sm={6} >
                  <TextField
                    label="StartYear"
                    type="number"
                    varient="outlined"
                    sx={{ width: "90%", margin: "20px" }}
                    {...register(`WorkExperience[${index}].StartYear`, {
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

                <Grid item xs={12} sm={6} >
                  <TextField
                    label="EndYear"
                    type="number"
                    varient="outlined"
                    sx={{ width: "90%", margin: "20px" }}
                    {...register(`WorkExperience[${index}].EndYear`, {
                      required: "This Field is required!",
                    })}
                    onChange={handleEndYearChange}
                    select
                    SelectProps={{ native: true }}
                  >
                    {Array.from(
                      { length: currentYear - startYear + 1 },
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
              {index > 0 && (
                <Button
                  sx={{ margin: "20px 0px 30px 0px" }}
                  color="error"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}

          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button
              onClick={() =>
                append({
                  JobTitle: "",
                  OrganizationName: "",
                  StartYear: "",
                  EndYear: "",
                })
              }
              variant="contained"
              sx={{ fontWeight: "bold" }}
            >
              Add
            </Button>
          </Box>

          <Divider
            sx={{
              backgroundColor: "dark",
              ml: "40px",
              mb: "30px",
              width: "88%",
            }}
          />
          <Button
            variant="contained"
            onClick={() => Navigate("/details-filling-page/education")}
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

export default WorkExperience;
