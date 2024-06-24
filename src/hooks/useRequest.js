import axios from "axios";
import { useState, useEffect } from "react";

function useRequest(url, method = "GET", data = null) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios({
          url,
          method,
          data,
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, method, data]);

  return { loading, error, response };
}

export default useRequest;
