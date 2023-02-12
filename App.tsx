import React from 'react';
import {SafeAreaView} from 'react-native';
import {CharacterList} from './src/feature/characterList/components/CharacterList';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CharacterList />
    </SafeAreaView>
  );
}

export default App;
