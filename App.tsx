import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(0);
  const disableFecth = useRef(false);

  const fetchData = async () => {
    if (loading || disableFecth.current) {
      return;
    }
    page.current = page.current + 1;
    setLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=${page.current}`;
    try {
      const {
        data: {results},
      } = await axios.get(url);
      setData((state: Array<any>) => {
        return [...state, ...results];
      });
    } catch (error) {
      if (error.response.data.error === 'There is nothing here') {
        disableFecth.current = true;
      }
      console.log(error.response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startLoading = () => {
    if (loading) {
      return <ActivityIndicator size={'large'} />;
    }
  };

  const updateList = () => {
    fetchData();
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.listItem}>
              <Text>
                {item.name} {item.id}
              </Text>
            </View>
          );
        }}
        ListFooterComponent={startLoading}
        onEndReachedThreshold={0.1}
        onEndReached={updateList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  listItem: {
    width: '100%',
    height: 40,
    padding: 8,
    alignItems: 'flex-start',
  },
});

export default App;
