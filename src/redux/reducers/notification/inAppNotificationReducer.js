import {
  INAPP_NOTIFICATION_REQUEST,
  INAPP_NOTIFICATION_SUCCESS,
  INAPP_NOTIFICATION_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  inAppNotificationData: {},
  error: "",
};
const inAppNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INAPP_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INAPP_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        inAppNotificationData: action.payload,
        error: "",
      };
    case INAPP_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        inAppNotificationData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default inAppNotificationReducer;
