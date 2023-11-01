import { KEY_SKILLS_DETAILS } from "../actionsTypes/ActionTypes";
// Here we are creating  ( keyskillsAction ) Action which Defines a type and receiving skillsData as payload **********

export const keySkillsAction = (skillsData) => ({
	type: KEY_SKILLS_DETAILS,
	payload: skillsData,
});
