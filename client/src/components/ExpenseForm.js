import React from 'react'
import {Button, Form} from 'semantic-ui-react'

class ExpenseForm extends React.Component {
    formValues = { 
      insurance: '', utilities: '', retirement: '',auto: '', 
      savings: '', food: '', entertainment: '', phone: '', misc: '' }
    state = {...this.formValues  };


  handleSubmit = (e) => {
  e.preventDefault();
  const {formValues: {insurance, utilities, retirement, auto, savings, food, entertainment, phone, misc}} = this.State
  }

  handleChange = (e) => {
      // const {insurance, utilities, retirement, auto, savings, food, entertainment, phone, misc} = e.target
      const {target: {name, value} } = e
      this.setState({  [name]: value,});
  }

  render() {
    const {insurance, utilities, retirement, auto, savings, food, entertainment, phone, misc} = this.state
  return ( 
    <div>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
            label="Insurance"
            placeholder="Insurance"
            type="input"
            required
            autoFocus
            value={insurance}
            onChange = {this.handleChange}
          />
          <Form.Input
            label="Utilities"
            placeholder="Utilities"
            type="input"
            required
            value={utilities}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Retirement"
            placeholder="Retirement"
            type="input"
            required
            value={retirement}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Auto"
            placeholder="Auto"
            type="input"
            required
            value={auto}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Savings"
            placeholder="Savings"
            type="input"
            required
            value={savings}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Food"
            placeholder="Food"
            type="input"
            required
            value={food}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Entertainment"
            placeholder="Entertainment"
            type="input"
            required
            value={entertainment}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Phone"
            placeholder="Phone"
            type="input"
            required
            value={phone}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Misc"
            placeholder="Misc"
            type="input"
            required
            value={misc}
            onChange={this.handleChange}
          />
          </Form>
      </div>
  )
  }
}

  


export default ExpenseForm;