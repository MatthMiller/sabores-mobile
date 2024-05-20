import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

const Login = () => {
  return (
    <ImageBackground
      source={require('../../assets/icons/login-register-pattern.png')}
      style={styles.container}
      imageStyle={styles.patternStyle}
    >
      <Text>Login</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '##F9EBDD;',
    paddingVertical: 12,
  },
  patternStyle: {
    resizeMode: 'repeat',
  },
});

export default Login;
