import {
  ADMIN_ANALYTICS_DATA_REQUEST,
  ADMIN_ANALYTICS_DATA_SUCCESS,
  ADMIN_ANALYTICS_DATA_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  adminAnalyticsData: {},
  error: "",
};
const adminAnalyticsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ANALYTICS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_ANALYTICS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        adminAnalyticsData: action.payload,
        error: "",
      };
    case ADMIN_ANALYTICS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        adminAnalyticsData: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
export default adminAnalyticsDataReducer;
