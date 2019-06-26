import React, { useState, useEffect } from "react";
import { Keyboard, Alert, AlertButton } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import cep from "../../services/cep";
import Details from "../../components/details";
import { Container, Title, Form, Input, Submit } from "./styles";

export default function Main() {
  state = {
    endereco: {}
  };

  const [input, setInput] = useState("");

  function handleSearchCEP() {
    if (input.length < 8) {
      console.log("CEP inválido");
      Alert.alert("Atenção", "Digite um CEP válido");
    } else
      cep(input).then(data => {
        Alert.alert(
          "Resultado",
          `CEP:${data.cep}
           Logradouro:${data.logradouro}
           Complemento:${data.complemento === "" ? 'sem complemento' : data.complemento}
           Bairro:${data.bairro}
           Localidade:${data.localidade}
           UF:${data.uf}`
        );
        /*console.log(data);
        this.setState({ endereco: data });
        console.log(this.state.endereco);*/
        Keyboard.dismiss();
      });
  }

  return (
    <Container>
      <Title>Buscar CEP</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="00000-000"
          keyboardType={"numeric"}
          maxLength={8}
        />
        <Submit onPress={handleSearchCEP}>
          <Icon name="search" size={22} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
}
