import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFetchData = async () => {
    setIsLoading(true);
    const { data: responseData } = await axios.get(url);

    if (responseData) {
      setData(responseData);
      setIsLoading(false);
      setIsError(false);
      setErrorMessage(null);
    } else {
      setData(null);
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("Failed to fetch data.");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [url]);

  return { data, isLoading, isError, errorMessage };
};

export default useFetchData;
