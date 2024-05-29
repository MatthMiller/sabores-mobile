import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const FeedRecipeSuggestion = () => {
  const [ingredients, setIngredients] = React.useState(['']);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>O que tem em casa?</Text>
      <Text style={styles.description}>
        Digite um ingrediente que você possua em sua casa e encontre a receita
        ideal.
      </Text>
      {ingredients.map((ingredient, index) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.number}>{index + 1}</Text>
            <TextInput
              onChangeText={(text) => {
                // Se não funcionar com o previous, fazer só
                // uma variavel temporaria para o estado
                setIngredients((previousIngredients) => {
                  previousIngredients[index] = text;
                  return previousIngredients;
                });
              }}
              placeholderTextColor={'#DEECDD'}
              style={styles.input}
              placeholder='Digite aqui...'
            />
          </View>
        );
      })}
      <Text style={styles.addText}>Adicionar outro ingrediente</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4F6C4E',
    marginHorizontal: 12,
    marginBottom: 20,

    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  title: {
    fontSize: 21,
    lineHeight: 22,
    fontFamily: 'LoraMediumItalic',
    textAlign: 'center',
    color: '#F5FFF4',
    marginBottom: 32,
  },
  description: {
    fontSize: 14,
    fontFamily: 'LoraRegular',
    textAlign: 'center',
    color: '#F5FFF4',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  number: {
    fontFamily: 'LoraSemiBold',
    fontSize: 32,
    color: '#C3C988',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#F5FFF4',
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'UbuntuRegular',
    fontSize: 16,
    paddingVertical: 6,
    // paddingHorizontal: 8,
  },
  addText: {
    color: '#C3C988',
    fontFamily: 'UbuntuMedium',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#C3C988',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 48,
    marginTop: 32,
  },
  buttonText: {
    textAlign: 'center',
    color: '#012300',
    fontSize: 14,
    fontFamily: 'UbuntuMedium',
  },
});

export default FeedRecipeSuggestion;
