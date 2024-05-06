import React from 'react';
import { Text, View } from 'react-native';
import Header from '../Components/Header';

const Categories = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Tela categorias</Text>
    </View>
  );
};

export default Categories;
