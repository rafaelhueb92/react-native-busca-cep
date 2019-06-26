import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
} from "./styles";

export default class Details extends Component(data) {
  render() {
    return (
      <Container>
        <TypeTitle>Endereço</TypeTitle>
        <TypeDescription>CEP:{data.cep}</TypeDescription>
        <TypeDescription>Logradouro:{data.logradouro}</TypeDescription>
        <TypeDescription>Complemento: {data.complemento}</TypeDescription>
        <TypeDescription>Bairro: {data.bairro}</TypeDescription>
        <TypeDescription>Localidade: {data.localidade}</TypeDescription>
        <TypeDescription>UF: {data.uf}</TypeDescription>
      </Container>
    );
  }
}
/**/