import { useState } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {

  const deleteEntry = (id) => {
  //function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  //const addEntry = (description, value, isExpense) => {
  function addEntry(description, value, isExpense) {
    const result = entries.concat({id: entries.length+1, description, value, isExpense});
    console.log(result);
    setEntries(result);
  }

  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size="small" color="blue" label="Balance" value="100.00" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description:"Car",
    value:"50.00",
    isExpense:true
  },
  {
    id:2,
    description:"Credit",
    value:"10.00",
    isExpense:false
  },
  {
    id:3,
    description:"Groceries",
    value:"40.00",
    isExpense:true
  }
]
