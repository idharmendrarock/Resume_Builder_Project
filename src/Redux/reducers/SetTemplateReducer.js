import { SET_TEMPLATE } from "../actionsTypes/ActionTypes";

//  Here we are creating initial State object to receive values from TemplatesDetails *****************

import { REMOVE_RESUME_TEMPLATES } from "../actionsTypes/ActionTypes";

const initialState = {
	selectedTemplate: null,
};

// This  setTemplateReducer function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const setTemplateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEMPLATE:
			return {
				...state,
				selectedTemplate: action.payload,
			};

		default:
			return state;
	}
};

export const removeResumeReducer = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_RESUME_TEMPLATES:
			return {
				...state,
				saveResumeTemp: state.saveResumeTemp.filter(
					(_, index) => index !== action.payload
				),
			};

		default:
			return state;
	}
};
