// import {
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAIL,
//   UPDATE_USER_REQUEST,
//   UPDATE_USER_SUCCESS,
//   UPDATE_USER_FAIL,
// } from '../../actions/actionTypes';
// const initialState = {
//   loading: false,
//   user: {},
//   error: '',
// };

// const getUserReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_USER_SUCCESS:
//       return {
//         loading: false,
//         user: action.payload,
//         error: '',
//       };
//     case GET_USER_FAIL:
//       return {
//         loading: false,
//         user: {},
//         error: action.payload,
//       };
//     case UPDATE_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case UPDATE_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: action.payload,
//         error: '',
//       };
//     case UPDATE_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         user: {},
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default getUserReducer;
