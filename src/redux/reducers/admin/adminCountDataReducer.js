import {
  ADMIN_COUNT_DATA_REQUEST,
  ADMIN_COUNT_DATA_SUCCESS,
  ADMIN_COUNT_DATA_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  adminCountData: {},
  error: "",
};
const adminCountDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_COUNT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_COUNT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        adminCountData: action.payload,
        error: "",
      };
    case ADMIN_COUNT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        adminCountData: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
export default adminCountDataReducer;
