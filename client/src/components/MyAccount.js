import React, {Fragment}  from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import { Button, Form, Header, Grid, Container} from 'semantic-ui-react';


class MyAccount extends React.Component {
  state = { editing: false,  name: '', email: '' };

  componentDidMount() {
    const { auth: { user: { email, name, }, }, } = this.props;
    this.setState({ email, name, });
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, name, } = this.state;
    const { auth: { user, }, } = this.props;

    this.setState({ editing: false, name: name, email: email });
  }

  handleChange = (e) => {
    const { name, value, } = e.target; 
    this.setState({ ...this.state, [name]: value,});
  }

  accountView = () => {
    const { auth: { user }, } = this.props;
    const { name, email } = this.state;
    return (
      <Fragment>
        <Grid.Column width={4}>
          <Header as="h2">{user.name}</Header>
          <Header as="h2">{user.email}</Header>
        </Grid.Column>
      </Fragment>
    )
  }

  editForm = () => {
    const { auth: { user }, } = this.props;
    const { name, email } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width ={4}>
          <Form.Input 
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update Account</Button>
        </Grid.Column>
      </Form>
    )
  }

  render() {
    const {editing, } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            {editing ? this.editForm() : this.accountView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? "Cancel" : "Edit"}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const AuthAccount = (props) => (
  <AuthConsumer>
    { auth =>
      <MyAccount {...props} auth={auth}/>
    }
  </AuthConsumer>
)
export default AuthAccount;