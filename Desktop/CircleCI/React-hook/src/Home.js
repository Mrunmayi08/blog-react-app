import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, isError } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
