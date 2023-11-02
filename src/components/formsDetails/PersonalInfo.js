import { Button, FormControl, FormGroup, Grid, Stack } from "@mui/material";
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
import { Margin } from "@mui/icons-material";


const PersonalInfo = () => {
  const { personalField } = useMyContext();
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  // We are using useform Hook from React, This useform Hook is used to manage all forms states like register ,handleSubmit,error etc.***********************
  console.log(personalField);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: personalField });

  const onSubmit = (data) => {
    dispatch(personalInfoAction(data));
    Navigate("/details-filling-page/education");
  };

  // This input style object is used  to styling inputfield*******************************

  // const inputStyle = {
  //   width: { xs: '93%', sm: '47%' },
  //   m: 1,
  //   marginBottom: "30px",
  //   backgroundColor: "white",
  //   borderRadius: "10px",
  //   "& .MuiInputBase-input": {
  //     color: "black",
  //   },
  //   "& label": {
  //     color: "grey",
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "grey",
  //     },
  //   },
  // };

  return (
    <>
      <Box        
        component="form"
        sx={{
          width: "700px",
          height: "auto",
          padding: "10px",
          boxShadow: 2,
          borderRadius: "10px",
          marginLeft: "800px",
          // Top: "100px",
          m: "20px",
          boxShadow: "0 0 20px 2px",
          alignItems: "center",
          textAlign: "center",
          
          // backgroundColor: "White",          
          p: 3,
          // position: "relative",





          // width: "100%",
          // height: "700px",
          // marginTop: "50px",                 
          // color:"black",
        }}
      >
        <Box>
          <ProfileSection />
        </Box>
        <Grid className="Responsive" container
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        
        >



          <Grid item xs={12} sm={6} >
            <TextField            
              className="input-field"
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="FirstName"
              type="text"
              varient="outlined"
              {...register("FirstName", { required: "this field is required!" })}
            />
            {errors.FirstName && (
              <p style={{ color: "red" }}>{errors.FirstName.message}</p>
            )}
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="LastName"
              type="text"
              varient="outlined"
              {...register("LastName", { required: "this field is required!" })}
            />
            {errors.LastName && (
              <p style={{ color: "red" }}>{errors.LastName.message}</p>
            )}
          </Grid>



          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="Email"
              type="text"
              varient="outlined"

              {...register("Email", {
                required: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email format",
                }
              })}
            />

            {errors.Email && (
              <p style={{ color: "red" }}>{errors.Email.message}</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="MobileNo"
              type="number"
              varient="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91 </InputAdornment>
                ),
              }}
              {...register("MobileNo", { required: "mobile no. is required!" })}
            />
            {errors.MobileNo && (
              <p style={{ color: "red" }}>{errors.MobileNo.message}</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="Address"
              type="text"
              varient="outlined"
              {...register("Address", { required: "address is required!" })}
            />
            {errors.Address && (
              <p style={{ color: "red" }}>{errors.Address.message}</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="City"
              type="text"
              varient="outlined"
              {...register("City", { required: "city is required!" })}
            />
            {errors.City && <p style={{ color: "red" }}>{errors.City.message}</p>}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="State"
              type="text"
              varient="outlined"
              {...register("State", { required: "state is required!" })}
            />
            {errors.State && (
              <p style={{ color: "red" }}>{errors.State.message}</p>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="PinCode"
              type="number"
              varient="outlined"
              {...register("PinCode", { required: "pin code is required!" })}
            />
            {errors.PinCode && (
              <p style={{ color: "red" }}>{errors.PinCode.message}</p>
            )}
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              // sx={inputStyle}
              sx={{margin: "10px"}}
              label="Objective"
              type="text"
              varient="outlined"
              multiline
              rows={4}
              {...register("Objective", { required: "objective is required!" })}
            />
            {errors.Objective && (
              <p style={{ color: "red" }}>{errors.Objective.message}</p>
            )}
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
