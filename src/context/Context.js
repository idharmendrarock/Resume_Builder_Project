import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DataContext = createContext();

const DataContextPro = (props) => {
  const personalData = useSelector(
    (state) => state.personalInfo.personalInfoValues
  );

  const EducationData = useSelector((state) => state.eduDetail.eduDetails);
  const WExperienceData = useSelector((state) => state.workExp.workData);
  const skillsData = useSelector((state) => state.skills.skillDetails)


  // console.log(personalData.FirstName)

  const SkillsPreloadedData = {
    keySkills: skillsData
  }


  const WorkExpPreloadedData = {
    WorkExperience: WExperienceData,
  };


  // This is preloaded Data  for Each Textfield*******************************

  const PersonalPreloadData = {
    FirstName: personalData.FirstName || "",
    LastName: personalData.LastName || "",
    Email: personalData.Email || "",
    MobileNo: personalData.MobileNo || "",
    Address: personalData.Address || "",
    City: personalData.City || "",
    State: personalData.State || "",
    PinCode: personalData.PinCode || "",
    Objective: personalData.Objective || "",
  };


  const EducationPreloadData = {
    Type: EducationData.Type || '',
    University: EducationData.University || '',
    Degree: EducationData.Degree || '',
    StartYear: EducationData.StartYear || '',
    EndYear: EducationData.EndYear || '',
  }

  const [personalField, setPersonalField] = useState();
  const [educationField, setEducationField] = useState()
  const [workExpField, setWorkExpField] = useState()
  const [skillsField, setSkillsField] = useState()
  const [resumeTemplate, setResumetemplate] = useState();


  useEffect(() => {
    // Update personalField when personalData changes
    setPersonalField(PersonalPreloadData);

    // Update EducationField when EducationData changes
    setEducationField(EducationPreloadData);

    // Update WorkExpField when WExperienceData changes
    setWorkExpField(WorkExpPreloadedData)

    // Update skillsField when SkillsData changes
    setSkillsField(SkillsPreloadedData)
  }, [personalData, EducationData, WExperienceData, skillsData]);

  

  useEffect(() => {
    // Get data from local storage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("dataArray"));
    if (storedData) {
      setResumetemplate(storedData);
    }
  }, []);

  // This AddData function Adds data to local storage**********************

  const addData = (newItems) => {
    setResumetemplate(newItems);
    localStorage.setItem("dataArray", JSON.stringify(newItems));
  };

  // This ContextValue variable is storing all the functions and states pass them in value as a props in datacontext.provider ****************************

  const contextValues = {
    addData,
    resumeTemplate,
    personalField,
    setPersonalField,
    educationField,
    setEducationField,
    workExpField,
    skillsField,
    setWorkExpField,
    setSkillsField,
  };

  return (
    <div>
      <DataContext.Provider value={contextValues}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContextPro;

export const useMyContext = () => {
  return useContext(DataContext);
};
