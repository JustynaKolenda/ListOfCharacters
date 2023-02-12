import React, {useEffect, useRef, useState} from 'react';
import {pullUserData} from '../request';
import {ICharacter} from '../models/ICharacter';
import {RequestErrorMsg} from '../models/requestError';
import {IRequestError} from '../models/IRequestError';

export function useCharacterData() {
  //In a more complicated situation (e.g. verse mapping) try catch would go to a separate file, but since there is only this query here, I leave it in one file

  const [data, setData] = useState<Array<ICharacter>>([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(0);
  const disableFetch = useRef(false);

  const fetchData = async () => {
    if (loading || disableFetch.current) {
      return;
    }
    page.current = page.current + 1;
    setLoading(true);

    try {
      const {
        data: {results},
      } = await pullUserData(page.current);

      setData((state: Array<ICharacter>) => {
        return [...state, ...results];
      });
    } catch (error) {
      const err = error as IRequestError;
      if (err.response?.data.error === RequestErrorMsg.NOTHING_HERE) {
        disableFetch.current = true;
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    updateList: fetchData,
    loading,
  };
}
