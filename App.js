import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to react native</Text>
      <Button title="Change text" />

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
