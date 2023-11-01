import { WORK_EXPERIENCE } from "../actionsTypes/ActionTypes";
// Here we are creating  ( workExpAction ) Action which Defines a type and receiving expData  as payload **********

export const workExpAction = (expData) => ({
	type: WORK_EXPERIENCE,
	payload: expData,
});
