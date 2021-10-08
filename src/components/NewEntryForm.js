import React, {useState} from 'react';
import ButtonAction from './ButtonAction';
import {Checkbox, Form, Segment} from 'semantic-ui-react';

function NewEntryForm({addEntry}) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return  (
        <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            label="Description"
            width={12}
            placeholder="Test placeholder"
            value={description}
            onChange={(event)=> setDescription(event.target.value)}
            />
            <Form.Input
            icon="dollar"
            iconPosition="left"
            label="Value"
            width={4}
            placeholder="100.00"
            value={value}
            onChange={(event)=> setValue(event.target.value)}
            />
        </Form.Group>
        <Segment compact>
            <Checkbox toggle label="is Expense" 
                checked={isExpense}
                onChange={() => setIsExpense((oldState) => !oldState)} ></Checkbox>
        </Segment>    
        <ButtonAction addEntry={addEntry} description={description} value={value} isExpense={isExpense} ></ButtonAction>
      </Form>
  );
}

export default NewEntryForm