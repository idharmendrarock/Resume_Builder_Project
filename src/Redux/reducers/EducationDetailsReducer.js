import { EDUCATION_DETAILS } from "../actionsTypes/ActionTypes";


const initialState ={
    eduDetails : {}
}
// This educationDetReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const educationDetReducer = (state = initialState, action) => {
	switch (action.type) {
		case EDUCATION_DETAILS:
			return {
				...state,
				eduDetails: action.payload,
			};

		default:
			return state;
	}
};
