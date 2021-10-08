import {Button, Container, Form, Grid, Header,Icon, Segment, Statistic} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size="small" color="blue">
        <Statistic.Label>Balance:</Statistic.Label>
        <Statistic.Value>$100.00</Statistic.Value>
      </Statistic>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green" >
                <Statistic.Label>Income:</Statistic.Label>
                <Statistic.Value>$200.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size="tiny" color="red" >
                <Statistic.Label>Expense:</Statistic.Label>
                <Statistic.Value>$100.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3} divided textAlign="right" >
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Car</Grid.Column>
            <Grid.Column width={3}>$50.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Groceries</Grid.Column>
            <Grid.Column width={3}>$40.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add New Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            label="Description"
            width={12}
            placeholder="Test placeholder"/>
            <Form.Input
            icon="dollar"
            iconPosition="left"
            label="Value"
            width={4}
            placeholder="100.00"/>
        </Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Add</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
