import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryCard from '../Components/CategoryCards';
import Header from '../Components/Header';

const Categories = ({ navigation }) => {
  console.log(navigation);

  const [categoriesCards, setCategoriesCards] = React.useState([]);

  React.useEffect(() => {
    fetchCategoriesCards();
  }, []);

  const fetchCategoriesCards = async () => {
    try {
      const response = await fetch('http://192.168.56.1:3030/categories/all');
      const data = await response.json();
      setCategoriesCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Header navigation={navigation} />
      {categoriesCards?.length ? ( 
        <View style={styles.containerCategories}>
          <FlatList data={categoriesCards} 
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CategoryCard id={item.id} title={item.title} imageLink={item.imageLink}/>}
            vertical
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({ //Conferir estilos
  containerCategories: {
      paddingTop: 20,
      backgroundColor: '#FCF5EB',
      width: "100%",
      alignItems: "center",
      justifyContent: "center",       
  },
  contentList: {
  },
});

export default Categories;
