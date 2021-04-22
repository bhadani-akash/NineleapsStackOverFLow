import {
  ADMIN_ANALYTICS_FIND_REQUEST,
  ADMIN_ANALYTICS_FIND_SUCCESS,
  ADMIN_ANALYTICS_FIND_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  adminAnalyticsFind: {},
  error: "",
};
const adminAnalyticsFindReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ANALYTICS_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_ANALYTICS_FIND_SUCCESS:
      return {
        ...state,
        loading: false,
        adminAnalyticsFind: action.payload,
        error: "",
      };
    case ADMIN_ANALYTICS_FIND_FAILURE:
      return {
        ...state,
        loading: false,
        adminAnalyticsFind: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
export default adminAnalyticsFindReducer;
