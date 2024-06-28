import { Button, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 80, category: "Utilities" },
    { id: 2, description: "Milk", amount: 10, category: "Groceries" },
    { id: 3, description: "Mathematics", amount: 10, category: "Education" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="card mb-3 justify-content-start">
        <div className="card-body">
          <ExpenseForm></ExpenseForm>
          <ExpenseFilter
            onSelectedCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((ex) => ex.id !== id))
            }
          ></ExpenseList>
        </div>
      </div>
    </>
  );
}

export default App;
