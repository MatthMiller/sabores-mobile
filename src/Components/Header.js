import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ navigation }) => {
  const [isSearchOnFocus, setIsSearchOnFocus] = React.useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 22 }]}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/icons/logo-laranja.png')}
          />
          <Text style={styles.logoText}>sabores</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButtonContainer}
          activeOpacity={0.7}
        >
          <Image
            style={styles.loginIcon}
            source={require('../../assets/icons/login-icon.png')}
          />
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TextInput
          placeholderTextColor={'#AE9F88'}
          onFocus={() => setIsSearchOnFocus(true)}
          style={[
            styles.inputPesquisar,
            isSearchOnFocus && { borderColor: '#FF724C' },
          ]}
          placeholder='Pesquisar...'
        />

        <Image
          style={styles.searchIcon}
          source={
            isSearchOnFocus
              ? require('../../assets/icons/search-icon-onfocus.png')
              : require('../../assets/icons/search-icon.png')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    zIndex: 2,
    backgroundColor: '#FCF5EB',
    paddingHorizontal: 12,
    // paddingVertical: 22,
    paddingBottom: 12,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    elevation: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoImage: {
    height: 28,
    width: 28,
  },
  logoText: {
    fontFamily: 'LoraSemiBoldItalic',
    fontSize: 28,
    lineHeight: 28,
    color: '#FF724C',
  },
  loginButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    backgroundColor: '#FF724C',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  loginIcon: {
    width: 20,
    height: 20,
  },
  loginButton: {
    fontSize: 14,
    lineHeight: 14,

    fontFamily: 'UbuntuMedium',
    color: '#FFF8F6',
  },
  bottom: {
    position: 'relative',
  },
  inputPesquisar: {
    backgroundColor: '#FAF2E8',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingLeft: 16 + 24 + 14,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#D6C7B3',
    fontSize: 16,
    color: '#241200',
    fontFamily: 'UbuntuRegular',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 13,
    height: 24,
    width: 24,
  },
});

export default Header;
