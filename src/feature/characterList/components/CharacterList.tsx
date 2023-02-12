import React from 'react';
import {useCharacterData} from '../hooks/useCharacterData';
import {CharacterListView} from './CharacterListView';

export const CharacterList = () => {
  const {data, loading, updateList} = useCharacterData();

  return (
    <CharacterListView data={data} loading={loading} updateList={updateList} />
  );
};
