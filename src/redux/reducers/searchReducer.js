import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actionTypes";
const initialState = {
  loading: false,
  searchData: {},
  error: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchData: action.payload,
        error: "",
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        searchData: {},
        error: "",
      };

    default:
      return state;
  }
};
export default searchReducer;
