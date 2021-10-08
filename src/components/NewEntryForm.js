import React from 'react';
import ButtonAction from './ButtonAction';
import {Form} from 'semantic-ui-react';

function NewEntryForm(props) {
    return  (
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
        <ButtonAction></ButtonAction>
      </Form>
  );
}

export default NewEntryForm