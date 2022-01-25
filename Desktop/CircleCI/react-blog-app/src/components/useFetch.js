import React, { useReducer } from "react";
import { useState, useEffect } from "react";
/*
 *useReducer hook
 *define reducer function with two arg state and action
 */
//cutome hook
const useFetch = (props) => {
  // const [state, dispatch] = useReducer(reducer, {
  //   data: null,
  //   isLoading: true,
  //   isError: null,
  // });
  const [data, setdata] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  //Render when useFetch have new URL
  //Basically useEffect render conditinally not every time
  useEffect(() => {
    setTimeout(
      () =>
        fetch(props)
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data from resource");
            }
            return res.json();
          })
          //excute after promise resolve
          .then((data) => {
            setdata(data);
            setLoading(false);
            setError(null);
          })
          //fetch the network error and set to error state
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          }),
      1000
    );
  }, [props]);
  return { data, isLoading, isError };
};

export default useFetch;
