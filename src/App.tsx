import './App.css';
import AppLayout from './components/AppLayout';
import { ExpenseProvider } from './context/ExpenseProvider';

function App() {
  return (
    <ExpenseProvider>
      <AppLayout />
    </ExpenseProvider>
  );
}

export default App;
