import { useEffect, useState } from "react";
// Custom hook
export default function useData({initialState, url}) {
    const [data, setData] = useState(initialState);

      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((result) => setData(result.data));
      }, [url]);


    return data;
};