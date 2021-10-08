import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances(props) {
    return  (
        <Segment>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance size="tiny" color="green" label="Income" value="200.00" />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance size="tiny" color="red" label="Expense" value="100.00" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  );
}

export default DisplayBalances