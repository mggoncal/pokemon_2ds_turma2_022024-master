import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function () {
  count [nome, setNome] = useState('');
  cont [img, setImage] = useState('');
  cont [descricao, setDescricao] = useState('');

  function loadSquirtle() {
    setNome(Squirtle);
    setImg(required('../assets/squirtle.png'));
    setDescricao('');
  }
  function loadpikachu() {
    setNome(Pikachu);
    setImg(required('../assets/pikachu.png'));
    setDescricao('');
    
  }

  return (
    <View>
      <View>
        <Text>{nome}</Text>
        <Image source={img} resizemode="cover" style={{alignSelf:'center', width:260, height: 200}}
        />
        <Text> {descricao}</Text>
        <Button title='Squirtle' color='#841584' onPress={loadSquirtle} />
        <Button title='Pikachu' color='#841584' onPress={loadpikachu} />
      </View>
    </View>
  );
}
