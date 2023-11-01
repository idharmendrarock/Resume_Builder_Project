import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { keySkillsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";

const KeySkills = () => {
  const { mode, skillsField } = useMyContext();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    control,
  } = useForm({
    defaultValues: skillsField
  });


  // This function Provides Functionality to control textfields by Adding New Field and removing selected ***************************************

  const { fields, append, remove } = useFieldArray({
    name: "keySkills",
    control,
  });

  // This onSubmit Function is used to dispatch form data to redux store for further operation  also This function navigate user to the preview of created resume********************************

  const onSubmit = (data) => {
    dispatch(keySkillsAction(data.keySkills));
    Navigate("/preview");
  };

  // This input style object is used  to styling inputfield*******************************

  const inputStyle = {
    width: "90%",
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
    <div className="keyResponsive">
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
              boxShadow: "0 0 20px 1px",
              textAlign: "center",
              borderRadius: "10px",
              marginTop: "50px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: "20px", mt: "20px", textTransform: "uppercase" }}
            >
              Key Skills
            </Typography>

            {/* This Fields came from useFieldArray to Map all the textfields *********************** */}

            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <Typography sx={{ fontWeight: "bold", marginRight: "73%" }}>
                    Skill : {index + 1}
                  </Typography>
                  <Divider
                    sx={{
                      backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
                      ml: "26px",
                      mb: "15px",
                      width: "88%",
                    }}
                  />
                  <TextField
                    label="Addskills"
                    type="text"
                    varient="outlined"
                    sx={inputStyle}
                    {...register(`keySkills.${index}.skills`)}
                    required
                  />

                  {index > 0 && (
                    <Button
                      sx={{ margin: "20px 0px 30px 0px" }}
                      color="error"
                      variant="outlined"
                      endIcon={<DeleteIcon />}
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              );
            })}
            <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
              <Button
                onClick={() => append({ skills: "" })}
                variant="outlined"
                sx={{ fontWeight: "bold" }}
              >
                Add
              </Button>
            </Box>
            <Divider
              sx={{
                backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
                ml: "26px",
                mb: "30px",
                width: "88%",
              }}
            />

            <Button
              variant="contained"
              onClick={() => Navigate("/details-filling-page/work-experience")}
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
              Preview
            </Button>
          </Box>
        </>
      </div>
    </div>
  );
};

export default KeySkills;
