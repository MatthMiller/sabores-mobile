import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CategoriesHeader = ({ navigation }) => {
  console.log(navigation);

  const [categoriesList, setCategoriesList] = React.useState([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://192.168.15.50:3030/categories/all');
      const data = await response.json();
      setCategoriesList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      imageStyle={styles.patternStyle}
      source={require('../../assets/icons/header-pattern.png')}
      style={styles.background}
    >
      {categoriesList?.length ? (
        <FlatList
          horizontal
          data={[
            ...categoriesList,
            { botaoNoFinal: true, id: 'botaoVerTodasCategorias' },
          ]}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            if (item.botaoNoFinal) {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.buttonContainer}
                  onPress={() => navigation.navigate('Categories')}
                >
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/categories-icon.png')}
                  />
                  <Text style={styles.buttonText}>Todas as categorias</Text>
                </TouchableOpacity>
              );
            }

            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.categoryContainer}
              >
                <Image
                  style={styles.categoryImage}
                  source={{ uri: item.imageLink }}
                />
                <Text style={styles.categoryText}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      ) : (
        <Text style={styles.categoryText}>Carregando...</Text>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    zIndex: 1,
    backgroundColor: '#F9EBDD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  patternStyle: {
    resizeMode: 'repeat',
  },
  contentContainerStyle: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 24,
  },
  categoryContainer: {
    alignItems: 'center',
    gap: 8,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#EDDDCD',
    borderWidth: 2,
  },
  categoryText: {
    color: '#241200',
    lineHeight: 14,
    fontFamily: 14,
    fontFamily: 'LoraRegular',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4F6C4E',
    gap: 8,
    maxWidth: 95,
    borderRadius: 5,
  },
  buttonIcon: {
    height: 41,
    width: 41,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#F5FFF4',
    fontFamily: 'UbuntuRegular',
  },
});

export default CategoriesHeader;
