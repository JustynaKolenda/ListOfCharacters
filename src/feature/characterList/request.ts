import {axiosClient} from '../../axios/axios';

export const pullUserData = (page: number) => {
  const url = `/character/?page=${page}`;
  return axiosClient.get(url);
};
