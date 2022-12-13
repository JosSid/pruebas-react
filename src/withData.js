// High Order Components
import { useEffect, useState } from 'react';

export default function withData({ url, initialState }) {
  return function (WrappedComponent) {
    const WithDataComponent = (props) => {
      const [data, setData] = useState(initialState);

      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((result) => setData(result.data));
      }, []);

      return <WrappedComponent {...props} data={data} />;
    };

    WithDataComponent.displayName = `withData(${WrappedComponent.name})`;
    return WithDataComponent;
  };
}
