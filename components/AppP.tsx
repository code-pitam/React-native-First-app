import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FirstPage from './FirstPage';

const AppP = () => {
  return (

      <FirstPage />

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default AppP;
