import {
  SUBSCRIBE_TAG_REQUEST,
  SUBSCRIBE_TAG_SUCCESS,
  SUBSCRIBE_TAG_FAILURE,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

export const subscribeTag = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(subscribeTagRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const subscribedTag = await axios.post(
        `${Ngrok.url}/api/subscribe/tag/${id}`,
        data,
        config
      );
      dispatch(subscribeTagSuccess(subscribedTag.data));
    } catch (error) {
      dispatch(subscribeTagFailure(error.message));
    }
  };
};
export const subscribeTagRequest = () => {
  return {
    type: SUBSCRIBE_TAG_REQUEST,
  };
};
export const subscribeTagSuccess = (subscribedTag) => {
  return {
    type: SUBSCRIBE_TAG_SUCCESS,
    payload: subscribedTag,
  };
};
export const subscribeTagFailure = (error) => {
  return {
    type: SUBSCRIBE_TAG_FAILURE,
    payload: error,
  };
};
