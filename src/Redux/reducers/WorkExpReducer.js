import { WORK_EXPERIENCE } from "../actionsTypes/ActionTypes";

//  Here we are creating initial State object to receive values from WorkData *****************

const initialState = {
	workData: null,
};


// This  WorkExpReducer function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const WorkExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case WORK_EXPERIENCE:
			return {
				...state,
				workData: action.payload,
			};

		default:
			return state;
	}
};
