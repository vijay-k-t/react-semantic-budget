import React from 'react';
import {Segment, Grid, Icon} from 'semantic-ui-react';

function EntryLine(props) {
    return  (
        <Segment color={props.isExpense ? 'red' : 'green'}>
            <Grid columns={3} divided textAlign="right" >
            <Grid.Row>
                <Grid.Column width={10} textAlign="left">{props.desc}</Grid.Column>
                <Grid.Column width={3}>${props.value}</Grid.Column>
                <Grid.Column width={3}>
                <Icon name="edit" bordered/>
                <Icon name="trash" bordered/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>   
  );
}

export default EntryLine