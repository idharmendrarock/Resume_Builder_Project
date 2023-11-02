import { Button, FormControl, FormGroup, Grid, MenuItem, Stack } from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { personalInfoAction } from "../../Redux/Index";
import { useNavigate } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import { useMyContext } from "../../context/Context";
import "../../App.css";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"



const PersonalInfo = () => {
  const { personalField } = useMyContext();
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  // We are using useform Hook from React, This useform Hook is used to manage all forms states like register ,handleSubmit,error etc.***********************
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
      .matches(/^[0-9]+$/, "Mobile No. must be 10 digits")
      .min(10)
      .max(10),

    Address: yup
      .string()
      .required("This field is required"),


    City: yup
      .string()
      .required("This field is required"),

    State: yup
      .string()
      .required("This field is required"),

    PinCode: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]+$/, "Pincode must be 6 digits")
      .min(6)
      .max(6),

    Objective: yup
      .string()
      .required("This field is required")
      .min(50)
      .max(150),
  })


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: personalField, resolver: yupResolver(Schema) });


  const onSubmit = (data) => {
    dispatch(personalInfoAction(data));
    Navigate("/details-filling-page/education");
  };


  const States = [
    {
      value: 'Andhra Pradesh',
      label: 'Andhra Pradesh',
    },
    {
      value: 'Arunachal Pradesh',
      label: 'Arunachal Pradesh',
    },
    {
      value: 'Assam',
      label: 'Assam',
    },
    {
      value: 'Bihar',
      label: 'Bihar',
    },
    {
      value: 'Chhattisgarh',
      label: 'Chhattisgarh',
    },
    {
      value: 'Goa',
      label: 'Goa',
    },
    {
      value: 'Gujarat',
      label: 'Gujarat',
    },
    {
      value: 'Haryana',
      label: 'Haryana',
    },
    {
      value: 'Himachal Pradesh',
      label: 'Himachal Pradesh',
    },
    {
      value: 'Jharkhand',
      label: 'Jharkhand',
    },
    {
      value: 'Karnataka',
      label: 'Karnataka',
    },
    {
      value: 'Kerala',
      label: 'Kerala',
    },
    {
      value: 'Madhya Pradesh',
      label: 'Madhya Pradesh',
    },
    {
      value: 'Maharashtra',
      label: 'Maharashtra',
    },
    {
      value: 'Meghalaya',
      label: 'Meghalaya',
    },
    {
      value: 'Mizoram',
      label: 'Mizoram',
    },
    {
      value: 'Nagaland',
      label: 'Nagaland',
    },
    {
      value: 'Odisha',
      label: 'Odisha',
    },
    {
      value: 'Punjab',
      label: 'Punjab',
    },
    {
      value: 'Rajasthan',
      label: 'Rajasthan',
    },
    {
      value: 'Sikkim',
      label: 'Sikkim',
    },
    {
      value: 'Tamil Nadu',
      label: 'Tamil Nadu',
    },
    {
      value: 'Telangana',
      label: 'Telangana',
    },
    {
      value: 'Tripura',
      label: 'Tripura',
    },
    {
      value: 'Uttar Pradesh',
      label: 'Uttar Pradesh',
    },
    {
      value: 'Uttarakhand',
      label: 'Uttarakhand',
    },
    {
      value: 'West Bengal',
      label: 'West Bengal',
    },
    {
      value: 'Andaman and Nicobar Islands',
      label: 'Union Territory',
    },
    {
      value: 'Dadra and Nagar Haveli and Daman and Diu',
      label: 'Dadra and Nagar Haveli and Daman and Diu',
    },
    {
      value: 'Lakshadweep',
      label: 'Lakshadweep',
    },
    {
      value: 'Delhi',
      label: 'Delhi',
    },
    {
      value: 'Puducherry',
      label: 'Puducherry',
    },
  ];

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "900px",
          height: "auto",
          padding: "10px",
          boxShadow: 2,
          borderRadius: "10px",
          marginLeft: "900px",
          // Top: "100px",
          m: "20px",
          p: 3,
          boxShadow: "0 0 20px 2px",
          textAlign: "center",
        }}
      >
        <Box>
          <ProfileSection />
        </Box>
        <Grid className="Responsive" container
        >
          <Grid item xs={12} sm={6} >
            <TextField
              className="input-field"
              label="FirstName"
              sx={{ width: "300px", margin: "20px" }}
              type="text"
              varient="outlined"
              {...register("FirstName")}
              error={!!errors?.FirstName}
              helperText={errors?.FirstName?.message}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "300px", margin: "20px" }}
              label="LastName"
              type="text"
              varient="outlined"
              {...register("LastName")}
              error={!!errors?.LastName}
              helperText={errors?.LastName?.message}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "300px", margin: "20px" }}
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
              sx={{ width: "300px", margin: "20px" }}
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
              sx={{ width: "300px", margin: "20px" }}
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
              sx={{ width: "300px", margin: "20px" }}
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
              sx={{ width: "300px", margin: "20px", }}
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
              sx={{ width: "300px", margin: "20px" }}
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

              sx={{ width: "300px", margin: "20px" }}
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
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
            >
              Next
            </Button>
          </Grid>
        </Grid >
      </Box >
    </>
  );
};

export default PersonalInfo;
