import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import postQuestionReducer from "./reducers/posts/postQuestionReducer";
//
//
//
import getPostsReducer from "./reducers/posts/getPostsReducer";
import getPostReducer from "./reducers/posts/getPostReducer";
import getAnswerReducer from "./reducers/answers/getAnswerReducer";

//redux
import postQuestionCommentReducer from "./reducers/homeFeed/postQuestionCommentReducer";
import postCommentReducer from "./reducers/homeFeed/postCommentReducer";
import voteQuestionReducer from "./reducers/homeFeed/voteQuestionReducer";
import voteAnswerReducer from "./reducers/homeFeed/voteAnswerReducer";

//tagsScreen
import getAllTagsReducer from "./reducers/tagsScreen/getAllTagsReducer";
import getSingleTagAndPostsReducer from "./reducers/tagsScreen/getSingleTagAndPostsReducer";
import subscribeTagReducer from "./reducers/tagsScreen/subscribeTagReducer";

//others
import userProfileReducer from "./reducers/userProfileReducer";
import viewProfileReducer from "./reducers/viewProfileReducer";
import searchReducer from "./reducers/searchReducer";

//admin
import adminCountDataReducer from "./reducers/admin/adminCountDataReducer";
import adminAnalyticsDataReducer from "./reducers/admin/adminAnalyticsDataReducer";
import adminAnalyticsFindReducer from "./reducers/admin/adminAnalyticsFindReducer";

//notification
import inAppNotificationReducer from "./reducers/notification/inAppNotificationReducer";

const middleWares = [thunk];

const reducer = combineReducers({
  //homme
  newQuestion: postQuestionReducer,
  //
  //
  //
  //
  postsData: getPostsReducer,
  postData: getPostReducer,
  postAnswerData: getAnswerReducer,

  //redux
  postQuestionCommentState: postQuestionCommentReducer,
  postCommentState: postCommentReducer,
  voteQuestionState: voteQuestionReducer,
  voteAnswerState: voteAnswerReducer,

  //tagsScreen
  getAllTagsState: getAllTagsReducer,
  getSingleTagAndPostsState: getSingleTagAndPostsReducer,
  subscribedTagState: subscribeTagReducer,

  //others
  userProfileState: userProfileReducer,
  vieWProfileState: viewProfileReducer,
  searchState: searchReducer,

  //admin
  adminCountDataState: adminCountDataReducer,
  adminAnalyticsDataState: adminAnalyticsDataReducer,
  adminAnalyticsFindState: adminAnalyticsFindReducer,

  //notification
  inAppNotificationState: inAppNotificationReducer,
});

const store = createStore(reducer, applyMiddleware(...middleWares));
export default store;
