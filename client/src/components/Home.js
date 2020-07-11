import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import UserIncomeBalance from './UserIncomeBalance';
import CurrentBalance from './CurrentBalance'
import MonthlyExpensesIncome from './MonthlyExpensesIncome'
import Income from './Income';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components'


const Home = () => (
 <AppContainer>
 <>
  <HeaderText> Welcome!</HeaderText>
  <UserIncomeBalance/>
  <CurrentBalance/>
  <br></br>
  {/* <Income/> */}
  <MonthlyExpensesIncome/>
  <br></br>
  <Card
    href={ExpenseForm}
    header='Create a Budget'
    color='blue'
  />

  {/* <ExpenseForm /> */}



  </>
  </AppContainer>

)
const AppContainer = styled.div`
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
`;
const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
`;

export default Home;