import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
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

        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TextInput style={styles.inputPesquisar} placeholder='Pesquisar...' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FCF5EB',
    paddingHorizontal: 12,
    // paddingVertical: 22,
    paddingBottom: 12,
    flexDirection: 'column',
    gap: 24,
    justifyContent: 'space-between',
    elevation: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  inputPesquisar: {
    backgroundColor: '#FAF2E8',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#D6C7B3',
  },
});

export default Header;
