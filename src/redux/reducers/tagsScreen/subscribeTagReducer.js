import {
  SUBSCRIBE_TAG_REQUEST,
  SUBSCRIBE_TAG_SUCCESS,
  SUBSCRIBE_TAG_FAILURE,
} from "../../actionTypes";
const initialState = {
  loading: false,
  subscribedTag: {},
  error: "",
};
const subscribeTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIBE_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        subscribedTag: action.payload,
        error: "",
      };
    case SUBSCRIBE_TAG_FAILURE:
      return {
        ...state,
        loading: false,
        subscribedTag: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default subscribeTagReducer;
