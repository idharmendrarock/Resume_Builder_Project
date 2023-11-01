import { PERSONAL_INFO_VALUE } from "../actionsTypes/ActionTypes";
// Here we are creating  ( personalInfoAction ) Action which Defines a type and receiving PerData as payload **********

export const personalInfoAction = (perData) => ({
	type: PERSONAL_INFO_VALUE,
	payload: perData,
});
