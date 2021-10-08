import React from 'react';
import {Button} from 'semantic-ui-react';

function ButtonAction(props) {
    return  (
        <Button.Group style={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary>Add</Button>
        </Button.Group>
  );
}

export default ButtonAction