import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SeasonalList = ({ navigation }) => {
  const [seasonalList, setSeasonalList] = React.useState([]);
  const [isTitlePressed, setIsTitlePressed] = React.useState(false);

  React.useEffect(() => {
    fetchSeasonalList();
  }, []);

  const fetchSeasonalList = async () => {
    try {
      const response = await fetch(
        'http://192.168.56.1:3030/recipes-list/getSeasonalList'
      );
      const data = await response.json();
      setSeasonalList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={() => setIsTitlePressed(true)}
        onPressOut={() => setIsTitlePressed(false)}
        activeOpacity={0.7}
        style={styles.titlesContainer}
      >
        <View>
          <Text style={styles.mainTitle}>Lista recomendada</Text>
          <Text style={styles.listTitle}>
            {seasonalList?.title ? seasonalList.title : 'Carregando...'}
          </Text>
        </View>
        <Image
          style={styles.openIcon}
          source={
            isTitlePressed
              ? require('../../assets/icons/open-in-new-icon-onpress.png')
              : require('../../assets/icons/open-in-new-icon.png')
          }
        />
      </TouchableOpacity>

      {seasonalList?.recipes ? (
        <FlatList
          horizontal
          data={seasonalList.recipes}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            // Transformar estimatedTimeInMinutes no formato '3h30min'
            const hours = Math.floor(item.estimatedTimeMinutes / 60);
            const minutes = item.estimatedTimeMinutes % 60;
            let time = '';
            if (hours > 0) time += `${hours}h`;
            if (minutes > 0) time += `${minutes}min`;

            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.recipeContainer}
              >
                <Image
                  style={styles.recipeImage}
                  source={{ uri: item.imagePath }}
                />
                <View style={styles.recipeDescription}>
                  <View>
                    <Text
                      style={styles.recipeTitle}
                      // limitar a uma linha
                      ellipsizeMode='tail'
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.recipeAuthor}>Matheus Monteiro</Text>
                  </View>
                  <View style={styles.descriptionBottom}>
                    <View style={styles.descriptionItem}>
                      <Image
                        style={styles.descriptionIcon}
                        source={require('../../assets/icons/prep-time-icon.png')}
                      />
                      <Text style={styles.descriptionItemText}>{time}</Text>
                    </View>
                    <View style={styles.descriptionItem}>
                      <Image
                        style={styles.descriptionIcon}
                        source={require('../../assets/icons/egg-icon.png')}
                      />
                      <Text style={styles.descriptionItemText}>
                        {item.ingredients} ingredientes
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 12,
  },
  titlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  mainTitle: {
    fontFamily: 'LoraMediumItalic',
    color: '#241200',
    marginTop: 48,
    marginBottom: 6,
    fontSize: 18,
    lineHeight: 18,
  },
  listTitle: {
    fontSize: 21,
    lineHeight: 22,
    fontFamily: 'LoraRegular',
    color: '#241200',
    marginBottom: 8,
  },
  openIcon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
  },
  contentContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 24,
  },
  recipeContainer: {
    width: 280,
    height: 280,
    elevation: 3,
    borderRadius: 5,
  },
  recipeImage: {
    flex: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  recipeDescription: {
    flex: 1,
    backgroundColor: '#FCEEDF',
    justifyContent: 'space-between',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  recipeTitle: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    fontFamily: 'LoraMedium',
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 6,
    color: '#241200',
  },
  recipeAuthor: {
    marginLeft: 12,
    marginRight: 12,
    fontFamily: 'LoraMediumItalic',
    fontSize: 14,
    lineHeight: 15,
    color: '#905E2C',
  },
  descriptionBottom: {
    gap: 8,
    marginBottom: 12,
  },
  descriptionItem: {
    marginLeft: 12,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  descriptionItemText: {
    fontFamily: 'LoraMedium',
    fontSize: 14,
    lineHeight: 15,
    color: '#905E2C',
  },
  descriptionIcon: {
    height: 20,
    width: 20,
  },
});

export default SeasonalList;
