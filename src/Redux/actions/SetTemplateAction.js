import { SET_TEMPLATE } from "../actionsTypes/ActionTypes";
// Here we are creating  ( setTemplateAction ) Action which Defines a type and receiving tempInfo as payload **********

export const setTemplateAction = (tempInfo) => ({
	type: SET_TEMPLATE,
	payload: tempInfo,
});

