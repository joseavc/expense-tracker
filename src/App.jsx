import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionHistory from './components/TransactionHistory';
import NewTransaction from './components/NewTransaction';
import GlobalProvider from './context/GlobalProvider';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
