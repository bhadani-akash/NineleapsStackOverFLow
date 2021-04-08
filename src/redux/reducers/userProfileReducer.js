import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from "../actionTypes";
const initialState = {
  loading: false,
  userProfileData: {},
  upadtedUserProfileData: {},
  error: "",
};
const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfileData: action.payload,
        error: "",
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        userProfileData: {},
        error: action.payload,
      };
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedUserProfileData: action.payload,
        error: "",
      };
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        updatedUserProfileData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userProfileReducer;
