import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isError, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
