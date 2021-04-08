import {
  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_FAILURE,
} from "../actionTypes";
const initialState = {
  loading: false,
  viewProfileData: {},
  error: "",
};
const viewProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        viewProfileData: action.payload,
        error: "",
      };
    case VIEW_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        viewProfileData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default viewProfileReducer;
