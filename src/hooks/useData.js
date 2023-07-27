import { useState, useEffect } from "react";
function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      })
      .catch((error) => {
        console.error("Error fetching: ", error);
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
export default useData;
