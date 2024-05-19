import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FeedRecipe = ({ navigation, recipe }) => {
  console.log(recipe);

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground
        source={{ uri: recipe.imagePath }}
        style={styles.recipeContainer}
        imageStyle={styles.recipeImage}
      >
        <View style={styles.notAShadow}></View>
        <View style={styles.shadow}>
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.recipeTitle}
          >
            {recipe.title}
          </Text>
          <View style={styles.recipeAuthorContainer}>
            <Image
              source={require('../../assets/icons/user-feed-recipe-icon.png')}
              style={styles.userIcon}
            />
            <Text style={styles.recipeAuthor}>Matheus Monteiro</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    height: 220,
    marginHorizontal: 12,
    marginBottom: 20,
  },
  recipeImage: {
    borderRadius: 5,
    resizeMode: 'cover',
  },
  notAShadow: {
    flex: 2,
  },
  shadow: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 7,
    paddingBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    lineHeight: 22,
    color: '#FFF',
    fontFamily: 'LoraMedium',
  },
  recipeAuthorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recipeAuthor: {
    fontSize: 14,
    lineHeight: 15,
    color: '#FCF5EB',
    fontFamily: 'LoraMediumItalic',
  },
  userIcon: {
    height: 20,
    width: 20,
  },
});

export default FeedRecipe;
