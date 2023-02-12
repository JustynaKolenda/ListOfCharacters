import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICharacter} from '../models/ICharacter';

export const ListOfCharacters = ({item}: {item: ICharacter}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>
        {item.name} {item.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 40,
    padding: 8,
    alignItems: 'flex-start',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
});
