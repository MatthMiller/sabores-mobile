import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const CategoryCard = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <ImageBackground style={styles.img} source={{ uri: props.imageLink }}>
          <View>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default CategoryCard;
const styles = StyleSheet.create({
  img: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    width: 176,
    height: 76,
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
});
