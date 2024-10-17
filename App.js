import { StyleSheet, Text, View, TextInput } from 'react-native';
import Pokemon from './components/Pokemon';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Pokemon />

      <TextInput 
        value={text} onChangeText={text => { setText(text); }}
        style={{ borderWidth: 2 }}
      />

      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
