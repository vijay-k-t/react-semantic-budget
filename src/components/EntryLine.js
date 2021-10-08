import React, { Fragment, useState } from 'react';
import {Segment, Grid, Icon} from 'semantic-ui-react';
import ModalEdit from './ModalEdit';

function EntryLine({entry, deleteEntry}) {
    const [isOpen, setIsOpen] = useState(false);
    return  (
        <Fragment>
            <Segment color={entry.isExpense ? 'red' : 'green'}>
                <Grid columns={3} divided textAlign="right" >
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{entry.description}</Grid.Column>
                    <Grid.Column width={3}>${entry.value}</Grid.Column>
                    <Grid.Column width={3}>
                    <Icon name="edit" bordered onClick={() => setIsOpen(true)}  />
                    <Icon name="trash" bordered onClick={() => deleteEntry(entry.id)} />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
            <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>   
  );
}

export default EntryLine