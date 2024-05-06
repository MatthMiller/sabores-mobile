import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoriesHeader from '../Components/CategoriesHeader';
import Header from '../Components/Header';
import SeasonalList from '../Components/SeasonalList';

const Home = ({ navigation }) => {
  // Nesse caso, se tiver algo no searchInput:
  // ocultar CategoriesHeader e mostrar o Feed
  // filtrado pelo searchInput. passar o searchInput
  // como props, para ele verificar se tem algo tb
  const [searchInput, setSearchInput] = React.useState('');

  // 🐔 No Header
  // Fazer um arquivo helper que verifica no asyncstorage
  // se o usuário está logado, verifica se o token salvo
  // é válido e retorna true ou false. E então redireciona

  return (
    <View>
      <Header navigation={navigation} />
      <CategoriesHeader navigation={navigation} />
      <SeasonalList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
