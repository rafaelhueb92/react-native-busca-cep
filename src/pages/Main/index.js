import React, { useState, PureComponent } from "react";
import { Keyboard, Alert, AlertButton } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import cepApi from "../../services/cep";
import Details from "../../components/details";
import { Container, Title, Form, Input, Submit } from "./styles";

export default class Main extends PureComponent {
  state = {
    endereco: {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: ""
    },
    cep: ""
  };
  
  handleSubmit = () => {
    if (this.state.cep.length < 8) {
      console.log("CEP inválido");
      Alert.alert("Atenção", "Digite um CEP válido");
    } else
      cepApi(this.state.cep).then(data => {
        console.log(data);
        this.setState({ endereco: data });
        console.log(this.state.endereco);
        Keyboard.dismiss();
      });
  };
  render() {
    return (
      <Container>
        <Title>Buscar CEP</Title>
        <Form>
          <Input
            onChangeText={text => this.setState({ cep: text })}
            value={this.state.cep}
            name="cep"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="00000-000"
            keyboardType={"numeric"}
            maxLength={8}
          />
          <Submit onPress={this.handleSubmit}>
            <Icon name="search" size={22} color="#FFF" />
          </Submit>
        </Form>
        {this.state.endereco.cep === "" ? (
          <></>
        ) : (
          <Details {...this.state} />
        )}
      </Container>
    );
  }
}
