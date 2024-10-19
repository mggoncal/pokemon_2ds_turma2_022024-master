import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function () {
  const [nome, setNome] = useState('');
  const [img, setImg] = useState('');
  const [descricao, setDescricao] = useState('');

  function loadSquirtle() {
    setNome('Squirtle');
    setImg(require('../assets/squirtle.png'));
    setDescricao('');
  }
  function loadpikachu() {
    setNome('Pikachu');
    setImg(require('../assets/pikachu.png'));
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

