import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { address } from '../../address';
import CategoriesHeader from '../Components/CategoriesHeader';
import FeedRecipe from '../Components/FeedRecipe';
import FeedRecipeSuggestion from '../Components/FeedRecipeSuggestion';
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

  const [feed, setFeed] = React.useState(null);

  React.useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    try {
      const response = await fetch(address + '/recipes/feed/recent');
      const data = await response.json();
      setFeed(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      {feed?.recipes ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              {!searchInput && <CategoriesHeader navigation={navigation} />}
              <SeasonalList navigation={navigation} />

              <Text style={styles.feedTitle}>Últimas receitas publicadas</Text>
              {/* Apenas as 3 primeiras receitas de feed.recipes */}
              <FlatList
                data={feed.recipes.slice(0, 3)}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FeedRecipe recipe={item} />}
              />
            </>
          }
          ListFooterComponent={
            // Receitas a partir do 4º item de feed.recipes
            <FlatList
              data={feed.recipes.slice(3)}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              // gap entre os itens
              // ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              renderItem={({ item }) => <FeedRecipe recipe={item} />}
            />
          }
          data={['🌟']}
          keyExtractor={(_, index) => index}
          renderItem={() => <FeedRecipeSuggestion />}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedTitleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feedTitle: {
    paddingHorizontal: 12,
    marginTop: 42,
    marginBottom: 20,

    maxWidth: 240,
    fontSize: 21,
    lineHeight: 22,
    fontFamily: 'LoraMediumItalic',
    color: '#241200',
  },
});

export default Home;
