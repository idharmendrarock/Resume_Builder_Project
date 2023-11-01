import { Button } from "@mui/material";
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

const PersonalInfo = () => {
  const { mode, personalField } = useMyContext();
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  // We are using useform Hook from React, This useform Hook is used to manage all forms states like register ,handleSubmit,error etc.***********************
  console.log(personalField);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ defaultValues: personalField });

  const onSubmit = (data) => {
    dispatch(personalInfoAction(data));
    Navigate("/details-filling-page/education");
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
    <>
      <Box
        container
        component="form"
        sx={{
          width: "80%",
          height: "auto",
          m: 3,
          p: 3,
          boxShadow: "0 0 20px 2px",
          textAlign: "center",
          borderRadius: "10px",
          marginTop: "50px",
          backgroundColor: mode === "light" ? "White" : "#072340",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <Box>
          <ProfileSection />
        </Box>
        <div className="Responsive">
          <TextField
            className="input-field"
            sx={inputStyle}
            label="FirstName"
            type="text"
            varient="outlined"
            {...register("FirstName", { required: "first name is required!" })}
          />
          {errors.FirstName && (
            <p style={{ color: "red" }}>{errors.FirstName.message}</p>
          )}

          <TextField
            sx={inputStyle}
            label="LastName"
            type="text"
            varient="outlined"
            {...register("LastName", { required: "last name is required!" })}
          />
          {errors.LastName && (
            <p style={{ color: "red" }}>{errors.LastName.message}</p>
          )}

          <TextField
            sx={inputStyle}
            label="Email"
            type="text"
            varient="outlined"
            {...register("Email", { required: "email is required!" })}
          />
          {errors.Email && (
            <p style={{ color: "red" }}>{errors.Email.message}</p>
          )}

          <TextField
            sx={inputStyle}
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

          <TextField
            sx={inputStyle}
            label="Address"
            type="text"
            varient="outlined"
            {...register("Address", { required: "address is required!" })}
          />
          {errors.Address && (
            <p style={{ color: "red" }}>{errors.Address.message}</p>
          )}

          <TextField
            sx={inputStyle}
            label="City"
            type="text"
            varient="outlined"
            {...register("City", { required: "city is required!" })}
          />
          {errors.City && <p style={{ color: "red" }}>{errors.City.message}</p>}

          <TextField
            sx={inputStyle}
            label="State"
            type="text"
            varient="outlined"
            {...register("State", { required: "state is required!" })}
          />
          {errors.State && (
            <p style={{ color: "red" }}>{errors.State.message}</p>
          )}

          <TextField
            sx={inputStyle}
            label="PinCode"
            type="number"
            varient="outlined"
            {...register("PinCode", { required: "pin code is required!" })}
          />
          {errors.PinCode && (
            <p style={{ color: "red" }}>{errors.PinCode.message}</p>
          )}
          <TextField
            sx={inputStyle}
            label="Objective"
            type="text"
            varient="outlined"
            multiline
            rows={4}
            {...register("Objective", { required: "objective is required!" })}
          />
        </div>
        {errors.Objective && (
          <p style={{ color: "red" }}>{errors.Objective.message}</p>
        )}

        <Button
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default PersonalInfo;
