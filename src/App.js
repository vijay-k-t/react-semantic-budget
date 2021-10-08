import {Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size="small" color="blue" label="Balance" value="100.00" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine isExpense desc="Car" value="50.00" />
      <EntryLine desc="Credit" value="10.00" />
      <EntryLine isExpense desc="Groceries" value="40.00" />
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
