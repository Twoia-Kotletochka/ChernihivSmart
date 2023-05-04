import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { translate } from 'google-translate-api';
import TextToSpeech from 'react-native-text-to-speech';

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const res = await translate(inputText, { to: 'uk' }); // Переклад тексту з англійської на українську
      setTranslatedText(res.text);
      TextToSpeech.speak(translatedText, { language: 'uk', pitch: 1.0 }); // Відтворення перекладеного тексту голосом з використанням Text To Speech
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput value={inputText} onChangeText={setInputText} />
      <Button title="Переклад" onPress={handleTranslate} />
      <Text>{translatedText}</Text>
    </View>
  );
}
