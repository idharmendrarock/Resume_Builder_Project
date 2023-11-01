import { PERSONAL_INFO_VALUE } from "../actionsTypes/ActionTypes";

//  Here we are creating initial State object to receive values from PersonalInfoDetails*****************


const initialState = {
	personalInfoValues: {},
};
// This personalInfoReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const personalInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case PERSONAL_INFO_VALUE:
			return {
				...state,
				personalInfoValues: action.payload,
			};
		default:
			return state;
	}
};
