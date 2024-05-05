import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Home from './src/Screens/Home';

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
    LoraSemiBoldItalic: require('./assets/fonts/Lora-SemiBoldItalic.ttf'),
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
