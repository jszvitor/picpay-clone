import React from 'react';

import {Container, Option, Img, Label } from './styles';

import img1 from '../../images/01.png';

export default function Suggestions() {
  return (
    <Container>
      <Option>
        <Img source={img1} />
        <Label>Doação</Label>
      </Option>
    </Container>
  )
}
