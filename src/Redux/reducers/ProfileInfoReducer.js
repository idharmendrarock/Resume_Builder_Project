import { PROFILE_INFO_VALUE } from "../actionsTypes/ActionTypes";

//  Here we are creating initial State object to receive values from ProfileInfoDetails*****************

const initialState = {
	profileInfovalue: {},
};

// This profileReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_INFO_VALUE:
			return {
				...state,
				profileInfovalue: action.payload,
			};

		default:
			return state;
	}
};
