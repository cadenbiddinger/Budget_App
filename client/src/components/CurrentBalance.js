import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CurrentBalance = () => {
  return(
    <div>
      <HeaderText>Your Current Balance</HeaderText>
      <HeaderText> $0.00</HeaderText>
    </div>
  )
}

const HeaderText = styled.h1`
  color: white !important;
  text-align: center`;

export default CurrentBalance