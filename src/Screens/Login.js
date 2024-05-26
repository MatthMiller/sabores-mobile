import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [isFormOnFocus, setIsFormOnFocus] = React.useState({
    email: false,
    password: false,
  });

  return (
    <ImageBackground
      source={require('../../assets/icons/login-register-pattern.png')}
      style={styles.container}
      imageStyle={styles.patternStyle}
    >
      <View style={styles.card}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/icons/logo-laranja.png')}
          />
          <Text style={styles.logoText}>sabores</Text>
        </View>
        <View style={styles.loginInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              onFocus={() => setIsFormOnFocus({ password: false, email: true })}
              style={
                isFormOnFocus.email
                  ? [styles.input, styles.inputFocused]
                  : styles.input
              }
              placeholder='Digite seu e-mail'
              placeholderTextColor='#AE9F88'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              onFocus={() => setIsFormOnFocus({ email: false, password: true })}
              style={
                isFormOnFocus.password
                  ? [styles.input, styles.inputFocused]
                  : styles.input
              }
              secureTextEntry={true}
              placeholder='Digite sua senha'
              placeholderTextColor='#AE9F88'
            />
          </View>
        </View>
        <View style={styles.bottomInfo}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.hintText}>Voltar para o início</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.hintText}>
              Não possui conta? Crie sua conta.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.filledButton}>
            <Text style={styles.filledButtonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#F9EBDD;',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  patternStyle: {
    resizeMode: 'repeat',
    flex: 1,
  },
  card: {
    backgroundColor: '#FCF5EB',
    width: '100%',
    borderRadius: 5,
    elevation: 4,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  logo: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 32,
  },
  logoImage: {
    height: 36,
    width: 36,
  },
  logoText: {
    fontFamily: 'LoraSemiBoldItalic',
    fontSize: 32,
    lineHeight: 32,
    marginTop: 4,
    color: '#FF724C',
  },
  loginInputs: {
    gap: 24,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#241200',
    fontFamily: 'LoraRegular',
  },
  input: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D6C7B3',
    fontSize: 16,
    color: '#241200',
    fontFamily: 'UbuntuRegular',
  },
  inputFocused: {
    borderColor: '#FF724C',
  },
  hintText: {
    fontSize: 14,
    color: '#FF724C',
    textDecorationLine: 'underline',
    fontFamily: 'UbuntuRegular',
    marginBottom: 16,
  },
  filledButton: {
    backgroundColor: '#FF724C',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 5,
  },
  filledButtonText: {
    textAlign: 'center',
    color: '#FFF8F6',
    fontSize: 16,
    fontFamily: 'UbuntuMedium',
  },
});

export default Login;
