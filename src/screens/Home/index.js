import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, Wrapper, Header, BalenceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10cb62" />
          <BalenceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,80</Balance>
          </BalenceContainer>
          <AntDesign name="gift" size={30} color="#10cb62" />
        </Header>
        <Suggestions />
      </Container>
    </Wrapper>
  )
}
