import {
  INAPP_NOTIFICATION_REQUEST,
  INAPP_NOTIFICATION_SUCCESS,
  INAPP_NOTIFICATION_FAILURE,
} from "../../actionTypes";
import axios from "axios";
import Ngrok from "../../../constants/Ngrok";

export const inAppNotification = (id) => {
  return async (dispatch) => {
    try {
      dispatch(inAppNotificationRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const inAppNotificationData = await axios.get(
        // `${Ngrok.url}/api/notification/${id}`,
        `${Ngrok.url}/api/notification/60634e4f6367ca4050854fbd`,
        config
      );
      dispatch(inAppNotificationSuccess(inAppNotificationData.data));
    } catch (error) {
      dispatch(inAppNotificationFailure(error.message));
    }
  };
};

export const inAppNotificationRequest = () => {
  return {
    type: INAPP_NOTIFICATION_REQUEST,
  };
};
export const inAppNotificationSuccess = (inAppNotiData) => {
  return {
    type: INAPP_NOTIFICATION_SUCCESS,
    payload: inAppNotiData,
  };
};
export const inAppNotificationFailure = (error) => {
  return {
    type: INAPP_NOTIFICATION_FAILURE,
    payload: error,
  };
};
