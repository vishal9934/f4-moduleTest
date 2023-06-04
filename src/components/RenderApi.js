import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Services/Action/action";
// import { useParams } from "react-router-dom";
import CardData from "./CardData";
import "../App.css";

const RenderApi = () => {
  const dispatch = useDispatch();
  // const { page } = useParams();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <h3 className="loading">Loading...</h3>}
      {error && <h4>{error}</h4>}
      <div className="container-fluid mt-5">
        <div className="wrapper row">
          {posts.map((data) => {
            return <CardData e={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RenderApi;
