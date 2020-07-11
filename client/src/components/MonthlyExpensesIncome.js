import React from 'react'
import {Card} from 'semantic-ui-react'

const items = [
  {
    header: 'Income',
    description:'$0.00',
  },
  {
    header: 'Budgeted Expenses',
    description:'$0.00',
  },
]

const MonthlyExpensesIncome = () => <Card.Group centered items={items} />

export default MonthlyExpensesIncome