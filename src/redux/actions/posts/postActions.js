import {
  // POST_QUESTION_REQUEST,
  // POST_QUESTION_SUCCESS,
  // POST_QUESTION_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "../../actionTypes";
import axios from "axios";

import Ngrok from "../../../constants/Ngrok";

//post question to server
// export const postQuestion = (data) => {
//   return async (dispatch) => {
//     try {
//       dispatch(postQuestionRequest());
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const post = await axios.post(`${Ngrok.url}/api/question/`, data, config);
//       dispatch(postQuestionSuccess(post.data));
//     } catch (error) {
//       dispatch(postQuestionFailure(error.message));
//     }
//   };
// };
// export const postQuestionRequest = () => {
//   return {
//     type: POST_QUESTION_REQUEST,
//   };
// };
// export const postQuestionSuccess = (post) => {
//   return {
//     type: POST_QUESTION_SUCCESS,
//     payload: post,
//   };
// };
// export const postQuestionFailure = (error) => {
//   return {
//     type: POST_QUESTION_FAILURE,
//     payload: error,
//   };
// };

//get all question
export const getposts = (page) => {
  // console.log("get all questions action");
  console.log("page", page);
  console.log(`${Ngrok.url}/api/question/?page=${page}`);
  return async (dispatch) => {
    try {
      dispatch(fetchpostsRequest());
      // console.log("get all questions request");
      const config = {
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin': '*'
        },
      };
      const post = await axios.get(
        `${Ngrok.url}/api/question/?page=${page}`,
        config
      );
      console.log("backend_data", post.data);
      dispatch(fetchpostsSuccess(post.data));
    } catch (error) {
      // error.message is the error message
      dispatch(fetchpostsFailure(error.message));
    }
  };
};
export const fetchpostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  };
};
export const fetchpostsSuccess = (post) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: post,
  };
};
export const fetchpostsFailure = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};

//single question
export const getpost = (id) => {
  // console.log("get post id", id);
  return async (dispatch) => {
    try {
      // console.log(id,"id")
      dispatch(fetchpostRequest());
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const ques = await axios.get(`${Ngrok.url}/api/question/${id}`, config);
      // console.log("single ques data res action", ques.data);
      dispatch(fetchpostSuccess(ques.data));
    } catch (error) {
      // error.message is the error message
      dispatch(fetchpostFailure(error.message));
    }
  };
};
export const fetchpostRequest = () => {
  return {
    type: GET_POST_REQUEST,
  };
};
export const fetchpostSuccess = (ques) => {
  return {
    type: GET_POST_SUCCESS,
    payload: ques,
  };
};
export const fetchpostFailure = (error) => {
  return {
    type: GET_POST_FAIL,
    payload: error,
  };
};
