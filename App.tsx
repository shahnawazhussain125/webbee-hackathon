import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import Navigations from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Navigations />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
