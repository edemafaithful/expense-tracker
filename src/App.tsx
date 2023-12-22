
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Movies", amount: 9.99, category: "Utilities" },
    { id: 2, description: "Tomato & Cheese", amount: 29.99, category: "Entertainment" },
    { id: 3, description: "Ps5 Console", amount: 600, category: "Utilities" },
    { id: 4, description: "Google Pixel 7pro", amount: 700, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1 }])} />
      </div>
      <div>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
