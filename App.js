import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Categories from './src/Screens/Categories';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

const Stack = createStackNavigator();

// Cor de fundo
const saboresTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FCF5EB',
  },
};

const App = () => {
  const [fontsLoaded] = useFonts({
    LoraRegular: require('./assets/fonts/Lora-Regular.ttf'),
    LoraMedium: require('./assets/fonts/Lora-Medium.ttf'),
    LoraMediumItalic: require('./assets/fonts/Lora-MediumItalic.ttf'),
    LoraSemiBoldItalic: require('./assets/fonts/Lora-SemiBoldItalic.ttf'),
    LoraSemiBold: require('./assets/fonts/Lora-SemiBold.ttf'),
    UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={saboresTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Categories'
          component={Categories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
