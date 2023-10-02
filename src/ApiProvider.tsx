import {createContext, ReactNode, useContext, useState} from 'react';
import {INews} from './interfaces';
import {Nullable} from './utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoFoundSvg from './assets/svg/NoFoundSvg';
interface IApiContext {
  data: Nullable<INews[]>;
  fetchData: () => Promise<void>;
  postData: (body: IPostBody) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  searchPost: (text: string) => void;
}
interface IPostBody {
  title: string;
  text: string;
  image: string;
  url: string;
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
  const fetchData = async () => {
    try {
      const response = await fetch('https://yourtestapi.com/api/posts/');
      const result = await response.json();
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

  const postData = async (body: IPostBody) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
      await fetch('https://yourtestapi.com/api/posts/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: myHeaders,
      });
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };
  const deletePost = async (id: number) => {
    try {
      await fetch(`https://yourtestapi.com/api/posts/${id}`, {
        method: 'DELETE',
      });
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  const searchPost = async (text: string) => {
    await fetchData();
    setData(
      prevState =>
        prevState?.filter(
          item => item.text.includes(text) || item.title.includes(text),
        )!,
    );
    if (!data?.length) {
      return <NoFoundSvg />;
    }
  };
  const contextValue: IApiContext = {
    data,
    fetchData,
    postData,
    deletePost,
    searchPost,
  };
  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
