import React from "react";
import { useRequest } from "../hooks";

const HomePage = () => {
  const { loading, error, response } = useRequest(
    import.meta.env.VITE_BASE_URL + "api/v1/videos/all"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Videos</h1>
      {response && response.data.aggregatedVideo._id}
    </div>
  );
};

export default HomePage;
