import React, { useState } from "react";
import { TextInput, View, Text, Alert, Keyboard } from "react-native";
import { api } from "../../../services/api";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import styles from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  function onChange(text='') {
    setMessage(text);
    setCharacterCount(text.length);
  };

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if(messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', {message, messageFormatted});
      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      setCharacterCount(0);
      Alert.alert('Mensagem Enviada com sucesso!')
    } else {
      Alert.alert('Escreva a mensagem para enviar.');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput  
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={text => onChange(text)}
        value={message}
        editable={!sendingMessage}
      />
      { characterCount !== 0 && (
        <Text style={styles.characterCount}>
          {characterCount}/140
        </Text>
      )}
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  )
}