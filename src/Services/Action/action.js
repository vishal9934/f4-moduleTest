import { REQUEST, SUCCESS, FAILURE } from "../Reducer/rootreducer";

export const fetchPostsRequest = () => {
  return {
    type: REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
};

const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const user = await response.json();
  return user;
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const posts = await getData();
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchPostsFailure(errorMsg));
    }
  };
};
