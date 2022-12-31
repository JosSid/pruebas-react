import { useEffect, useState } from 'react';

export default function withData({ url, initialState }) { //Primero pasamos los parametros y devolvemos otra funcion;
  return function (WrappedComponent) { //Funcion HOC que devyelve un componente mejorado
    const WithDataComponent = ({ ...props }) => {// Crea el componente mejorado
      const [data, setData] = useState(initialState);

      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((result) => setData(result.data));
      }, []);

      return <WrappedComponent {...props} data={data} />; // pasamos todas las propos que recibe el componente a mejorar y le añadimos las mejoras(data)
    };
    WithDataComponent.displayName = `withData(${
        WrappedComponent.displayName ?? WrappedComponent.name
      })`; // Seteamos el nombre del componente original al componente mejorado
    
      return WithDataComponent;
  };
  
};
