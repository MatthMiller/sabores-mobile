import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FeedRecipeSuggestion = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>O que tem em casa?</Text>
      <Text style={styles.description}>
        Digite um ingrediente que você possua em sua casa e encontre a receita
        ideal.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4F6C4E',
    marginHorizontal: 12,
    marginBottom: 20,

    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 21,
    lineHeight: 22,
    fontFamily: 'LoraMediumItalic',
    textAlign: 'center',
    color: '#F5FFF4',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontFamily: 'LoraRegular',
    textAlign: 'center',
    color: '#F5FFF4',
    marginBottom: 32,
  },
});

export default FeedRecipeSuggestion;
