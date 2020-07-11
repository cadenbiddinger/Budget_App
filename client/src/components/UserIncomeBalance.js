import React, {useState} from 'react'
import { Button, Form, Card} from 'semantic-ui-react'
import axios from 'axios'

const UserIncomeBalance = (props) => {

  const [income, setIncome] = useState(0)
  const [balance, setBalance] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put('/api/user/1', {income,balance,})
    .then(res=> {
      props.add(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return(
    <>
    <Card >
      <Card.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label> Enter Monthly Income </label>
            <input 
              type='income' 
              value={income} 
              placeholder='Enter Monthly Income'
              onChange={(e) => setIncome(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label> Enter Initial Balance </label>
            <input 
              type='balance' 
              value={balance} 
              placeholder='Enter Initial Balance'
              onChange={(e) => setBalance(e.target.value)}/>
          </Form.Field>
          <Button color='blue' type='submit'>Submit</Button>
        </Form>
     </Card.Content>
    </Card>
    </>
  )
}


export default UserIncomeBalance