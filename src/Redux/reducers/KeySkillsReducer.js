import { KEY_SKILLS_DETAILS } from "../actionsTypes/ActionTypes";


//  Here we are creating initial State object to receive values from SkillDetails *****************

const initialState = {
	skillDetails: null,
};
// This keySkillsReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const keySkillsReducer = (state = initialState, action) => {
	switch (action.type) {
		case KEY_SKILLS_DETAILS:
			return {
				...state,
				skillDetails: action.payload,
			};

		default:
			return state;
	}
};
