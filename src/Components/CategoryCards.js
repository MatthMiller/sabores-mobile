import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const CategoryCard = ({ imageLink, title, impar, ultimoIndex }) => {
  if (ultimoIndex) return null;

  return (
    <TouchableOpacity style={styles.imageContainer}>
      <View
        style={
          impar
            ? [styles.marginContainer, styles.marginRight]
            : [styles.marginContainer, styles.marginLeft]
        }
      >
        <ImageBackground style={styles.img} source={{ uri: imageLink }}>
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default CategoryCard;
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  marginContainer: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  img: {
    // marginRight: 5,
    // marginLeft: 5,
    // marginBottom: 10,
    // width: 176,
    marginRight: 20,
    height: 76,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  text: {
    color: '#fff',
    height: '100%',
    fontSize: 16,
    fontFamily: 'UbuntuRegular',
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  marginRight: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 5,
  },
});
