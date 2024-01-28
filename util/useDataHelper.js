import useSWR from 'swr';
import axios from 'axios';

export const useCourses = () => {
  const { data, error, isLoading, mutate } = useSWR('https://765782e1-a7af-49ac-ab95-6eb848d0d5e9.mock.pstmn.io/courses', axios);
  console.log(data?.data?.data);
  return {
    data: data?.data?.data || [],
    error,
    isLoading,
    mutate
  };
};

export const useData = ({
  api,
  options
}) => {
  const { data, error, isLoading, mutate } = useSWR(api, axios, options);
  return {
    data,
    error,
    isLoading,
    mutate
  };
};
