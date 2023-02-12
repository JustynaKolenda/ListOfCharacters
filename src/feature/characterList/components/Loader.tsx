import React from 'react';
import {ActivityIndicator} from 'react-native';

interface iProps {
  loading: boolean;
}

export const Loader = (props: iProps) => {
  if (props.loading) {
    return <ActivityIndicator size={'large'} />;
  } else {
    return <></>;
  }
};
