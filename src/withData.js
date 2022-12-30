import { useEffect, useState } from 'react';

export default function withData(WrappedComponent, {url, initialState}) {
  const WithDataComponent = () => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result.data));
    }, []);

    return <WrappedComponent data={data}/>
  };

  WithDataComponent.displayName = `withData(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`;

  return WithDataComponent;
};
