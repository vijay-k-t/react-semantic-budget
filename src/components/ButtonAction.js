import React from 'react';
import {Button} from 'semantic-ui-react';

function ButtonAction({addEntry, description, value, isExpense} ) {
    return  (
        <Button.Group style={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary onClick={() => {addEntry(description, value, isExpense)}} >Add</Button>
        </Button.Group>
  );
}

export default ButtonAction