import './App.css'
import Barchart from './components/Barchart'
import TransactionsPage from './components/TransactionPage'
import StatisticsBox from './components/StatisticsBox'

function App() {
  return (
    <div className="App">
      <TransactionsPage />
      <StatisticsBox />
      <Barchart />
    </div>
  )
}

export default App
