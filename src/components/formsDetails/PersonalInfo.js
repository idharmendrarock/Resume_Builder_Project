import {
  Button,
  Grid,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { personalInfoAction } from "../../Redux/Index";
import { useNavigate } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import { useMyContext } from "../../context/Context";
import "../../App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


// We are using useform Hook from React, This useform Hook is used to manage all forms states like register ,handleSubmit etc.***********************

const PersonalInfo = () => {
  const { personalField } = useMyContext();
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  // We are using yup and yupResolver(Schema) for error validation etc.***********************

  console.log(personalField);

  const Schema = yup.object().shape({
    FirstName: yup
      .string()
      .required("This field is required")
      .min(2)
      .strict(true)
      .trim("fill without space"),

    LastName: yup
      .string()
      .required("This field is required")
      .min(2)
      .strict(true)
      .trim("Emter without space"),

    Email: yup
      .string()
      .email("Enter valid Email")
      .required("This field is required"),

    MobileNo: yup
      .string()
      .required("This field is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Mobile number is not valid"
      )
      .length(10, "Mobile No. must be 10 digits"),

    Address: yup.string().required("This field is required"),

    City: yup.string().required("This field is required"),

    State: yup.string().required("This field is required"),

    PinCode: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]+$/, "Pincode is not valid")
      .length(6, "Pin Code. must be 6 digits"),

    Objective: yup.string().required("This field is required").min(50).max(500),
  });

  const States = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh",
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh",
    },
    {
      value: "Assam",
      label: "Assam",
    },
    {
      value: "Bihar",
      label: "Bihar",
    },
    {
      value: "Chhattisgarh",
      label: "Chhattisgarh",
    },
    {
      value: "Goa",
      label: "Goa",
    },
    {
      value: "Gujarat",
      label: "Gujarat",
    },
    {
      value: "Haryana",
      label: "Haryana",
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
    },
    {
      value: "Karnataka",
      label: "Karnataka",
    },
    {
      value: "Kerala",
      label: "Kerala",
    },
    {
      value: "Madhya Pradesh",
      label: "Madhya Pradesh",
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
    },
    {
      value: "Meghalaya",
      label: "Meghalaya",
    },
    {
      value: "Mizoram",
      label: "Mizoram",
    },
    {
      value: "Nagaland",
      label: "Nagaland",
    },
    {
      value: "Odisha",
      label: "Odisha",
    },
    {
      value: "Punjab",
      label: "Punjab",
    },
    {
      value: "Rajasthan",
      label: "Rajasthan",
    },
    {
      value: "Sikkim",
      label: "Sikkim",
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
    },
    {
      value: "Telangana",
      label: "Telangana",
    },
    {
      value: "Tripura",
      label: "Tripura",
    },
    {
      value: "Uttar Pradesh",
      label: "Uttar Pradesh",
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
    },
    {
      value: "West Bengal",
      label: "West Bengal",
    },
    {
      value: "Andaman and Nicobar Islands",
      label: "Union Territory",
    },
    {
      value: "Dadra and Nagar Haveli and Daman and Diu",
      label: "Dadra and Nagar Haveli and Daman and Diu",
    },
    {
      value: "Lakshadweep",
      label: "Lakshadweep",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Puducherry",
      label: "Puducherry",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: personalField, resolver: yupResolver(Schema) });

  const onSubmit = (data) => {
    dispatch(personalInfoAction(data));
    Navigate("/details-filling-page/education");
  };


  return (
    <>
      <Box
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
          boxShadow: "0 0 20px 2px #0055ff",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "20px",
          backgroundColor: "white",          
        }}
      >
        <Box>
          <ProfileSection />
        </Box>
        <Grid className="Responsive" container>
          <Grid item xs={12} sm={6}>
            <TextField
              className="input-field"
              label="First Name"
              sx={{ width: "90%", margin: "20px", textTransform: "capitalize" }}
              type="text"
              varient="outlined"
              {...register("FirstName")}
              error={!!errors?.FirstName}
              helperText={errors?.FirstName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="Last Name"
              type="text"
              varient="outlined"
              {...register("LastName")}
              error={!!errors?.LastName}
              helperText={errors?.LastName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="Email"
              type="text"
              varient="outlined"
              {...register("Email")}
              error={!!errors?.Email}
              helperText={errors?.Email?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="MobileNo"
              type="number"
              varient="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91 </InputAdornment>
                ),
              }}
              {...register("MobileNo")}
              error={!!errors?.MobileNo}
              helperText={errors?.MobileNo?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="Address"
              type="text"
              varient="outlined"
              {...register("Address")}
              error={!!errors?.Address}
              helperText={errors?.Address?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="City"
              type="text"
              varient="outlined"
              {...register("City")}
              error={!!errors?.City}
              helperText={errors?.City?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-select-states"
              select
              type="Select"
              sx={{ width: "90%", margin: "20px", textAlign: "left" }}
              label="State"
              varient="outlined"
              {...register("State")}
              error={!!errors?.State}
              helperText={errors?.State?.message}
            >
              {States.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="PinCode"
              type="number"
              varient="outlined"
              {...register("PinCode")}
              error={!!errors?.PinCode}
              helperText={errors?.PinCode?.message}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              sx={{ width: "90%", margin: "20px" }}
              label="Objective"
              type="text"
              varient="outlined"
              multiline
              rows={4}
              {...register("Objective")}
              error={!!errors?.Objective}
              helperText={errors?.Objective?.message}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button
              onClick={handleSubmit(onSubmit)}
              // OnKeyPress ={handleSubmit(onsubmit)}
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonalInfo;
