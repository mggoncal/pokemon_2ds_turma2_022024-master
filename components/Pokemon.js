import { View, Text, Button } from 'react-native';

export default function () {
  function loadSquirtle() {
    alert('Hello Squirtle');
  }

  return (
    <View>
      <View>
        <Button title='Squirtle' color='#841584' onPress={loadSquirtle} />
      </View>
    </View>
  );
}
