import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ICharacter} from '../models/ICharacter';
import {ListOfCharacters} from './ListOfCharacters';
import {Loader} from './Loader';

interface IProps {
  data: Array<ICharacter>;
  updateList: (info?: {distanceFromEnd: number}) => void;
  loading: boolean;
}

export const CharacterListView = (props: IProps) => {
  const {data, updateList, loading} = props;

  const renderItem = ({item}: {item: ICharacter}) => {
    return <ListOfCharacters item={item} />;
  };

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListFooterComponent={<Loader loading={loading} />}
      onEndReachedThreshold={0.1}
      onEndReached={updateList}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: '100%',
  },
});
