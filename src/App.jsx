import {useState} from 'react'
import './App.css'
import ExpenseData from '../ExpenseData'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

function App() {
   
  const [expenses, setExpenses]= useState(ExpenseData)
  return (
    
    <main >
      <h1>Track Your Expense</h1>
      <div className='expense-tracker'>
    <ExpenseForm/>
    <ExpenseTable expense={expenses}/>
    </div>
    </main>
  )
}
export default App
