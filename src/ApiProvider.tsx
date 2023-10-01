import {createContext, ReactNode, useContext, useState} from 'react';
import {INews} from './interfaces';
import {Nullable} from './utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IApiContext {
  data: Nullable<INews[]>;
  fetchData: (options?: IPostOptions) => Promise<void>;
}
interface IPostBody {
  title: string;
  text: string;
  image: string;
  url: string;
}

interface IPostOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: IPostBody;
}
const ApiContext = createContext<Nullable<IApiContext>>(null);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};

export const ApiProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState<Nullable<INews[]>>(null);
  const fetchData = async (options?: IPostOptions) => {
    console.log('OPTIONS', options);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
      const response = await fetch(
        'https://yourtestapi.com/api/posts/',
        options
          ? {
              method: options.method,
              body: JSON.stringify(options?.body),
              headers: myHeaders,
            }
          : {},
      );
      const result = await response.json();
      console.log('RESULT', result);

      setData(result);
      await AsyncStorage.setItem('newsData', JSON.stringify(result));
    } catch (e) {
      const storedData = await AsyncStorage.getItem('newsData');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
      console.error('Error fetching data:', e);
    }
  };
  const contextValue: IApiContext = {
    data,
    fetchData,
  };
  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
