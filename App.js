import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Welcome to react native');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change text" onPress={()=> setOutputText('The Text Changed!')} />

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
