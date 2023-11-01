import React, { useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { educationDetailsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const Education = () => {
  const { mode, educationField } = useMyContext();
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

  // const preloadedData ={
  //   Type:EducationDetails.Type || '',
  //   University:EducationDetails.University || '',
  //   Degree:EducationDetails.Degree || '',
  //   StartYear:EducationDetails.StartYear || '',
  //   EndYear:EducationDetails.EndYear || '',
  // }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: educationField,
  });

  // This onSubmit Function is used to dispatch form data to redux store for further operation  also This function navigate user to next formfield******************

  const onSubmit = (data) => {
    const FormData = data;
    dispatch(educationDetailsAction(FormData));
    Navigate("/details-filling-page/work-experience");
  };

  // This input style object is used  to styling inputfield*******************************

  const inputStyle = {
    width: {xs : '93%', sm: '47%'},
    m: 1,
    backgroundColor: mode === "light" ? "white" : "#072340",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: mode === "light" ? "black" : "white",
    },
    "& label": {
      color: mode === "light" ? "grey" : "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode === "light" ? "grey" : "white",
      },
    },
  };

  return (
    <div>
      <>
        <Box
          container
          component="form"
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 20px 0.1px",
            textAlign: "center",
            borderRadius: "10px",
            marginTop: "50px",
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
                backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
                ml: "40px",
                mb: "30px",
                width: "88%",
              }}
            />
            <TextField
              sx={inputStyle}
              label="Type "
              type="text"
              variant="outlined"
              {...register("Type", {
                required: "This Field is required!",
              })}
            />
            {errors.Type && (
              <p style={{ color: "red" }}>{errors.Type.message}</p>
            )}

            <TextField
              sx={inputStyle}
              label="University "
              type="text"
              variant="outlined"
              {...register("University", {
                required: "This Field is required!",
              })}
            />
            {errors.University && (
              <p style={{ color: "red" }}>{errors.University.message}</p>
            )}
            <TextField
              sx={inputStyle}
              label="Degree"
              type="text"
              variant="outlined"
              {...register("Degree", {
                required: "This Field is required!",
              })}
            />
            {errors.Degree && (
              <p style={{ color: "red" }}>{errors.Degree.message}</p>
            )}
            <TextField
              sx={inputStyle}
              label="StartYear"
              type="number"
              variant="outlined"
              {...register("StartYear", {
                required: "This Field is required!",
              })}
              onChange={handleStartYearChange}
              select
              SelectProps={{ native: true }}
            >
              {Array.from({ length: currentYear - 1900 + 1 }, (_, index) => (
                <option
                  style={{ color: mode === "light" ? "black" : "black" }}
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
            <TextField
              sx={inputStyle}
              label="EndYear"
              type="number"
              variant="outlined"
              {...register("EndYear", {
                required: "This Field is required",
              })}
              onChange={handleEndYearChange}
              select
              SelectProps={{ native: true }}
            >
              {Array.from(
                { length: currentYear - startYear + 1 },
                (_, index) => (
                  <option
                    style={{ color: mode === "light" ? "black" : "black" }}
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
          </div>

          <Divider
            sx={{
              backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
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
              mr: "10px",
            }}
          >
            Back
          </Button>
          <Button
            disabled={!isDirty || !isValid}
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
