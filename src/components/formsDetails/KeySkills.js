import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import { keySkillsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import { OnKeyPress } from "../OnKeyPress";




const KeySkills = () => {
  const { skillsField } = useMyContext();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      defaultValues: skillsField,
    },
  });


  // This function Provides Functionality to control textfields by Adding New Field and removing selected ***************************************

  const { fields, append, remove } = useFieldArray({
    name: "keySkills",
    control,
  });

  OnKeyPress(append, "Enter");

  // This onSubmit Function is used to dispatch form data to redux store for further operation  also This function navigate user to the preview of created resume********************************

  const onSubmit = (data) => {
    dispatch(keySkillsAction(data.keySkills));
    Navigate("/preview");
  };

  return (
    <div className="keyResponsive">
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
              boxShadow: "0 0 20px 2px #0055ff",
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "20px",
              backgroundColor: "white",
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
                      backgroundColor: "rgb(151, 149, 149)",
                      ml: "26px",
                      mb: "15px",
                      width: "88%",
                    }}
                  />
                  <TextField
                    label="Add skills"
                    type="text"
                    varient="outlined"
                    sx={{ width: "35%", margin: "20px" }}
                    {...register(`keySkills.${index}.skills`)}
                    required
                  />
                  {index > 0 && (
                    <Button
                      sx={{ margin: "20px 0px 30px 0px" }}
                      color="error"
                      variant="contained"
                      onClick={() => remove(index)}
                    >
                      <ClearIcon />
                    </Button>
                  )}
                </div>
              );
            })}
            <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
              <Button
                onClick={() => append({ skills: "" })}
                variant="contained"
                sx={{ fontWeight: "bold" }}
              >
                Add
              </Button>
            </Box>
            <Divider
              sx={{
                backgroundColor: "dark",
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
              Preview <KeyboardDoubleArrowRightSharpIcon />
            </Button>
          </Box>
        </>
      </div>
    </div>
  );
};

export default KeySkills;
