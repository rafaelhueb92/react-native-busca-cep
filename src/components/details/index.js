import React, { Component } from "react";

import { Container, TypeTitle, TypeDescription } from "./styles";

const Details = ({ endereco }) => (
  <Container>
    <TypeTitle>Endereço</TypeTitle>
    <TypeDescription>CEP:{endereco.cep}</TypeDescription>
    <TypeDescription>Logradouro:{endereco.logradouro}</TypeDescription>
    <TypeDescription>Complemento: {endereco.complemento}</TypeDescription>
    <TypeDescription>Bairro: {endereco.bairro}</TypeDescription>
    <TypeDescription>Localidade: {endereco.localidade}</TypeDescription>
    <TypeDescription>UF: {endereco.uf}</TypeDescription>
  </Container>
);

export default Details;
