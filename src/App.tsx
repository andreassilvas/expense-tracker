import { Button, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

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
    <SimpleGrid spacing={4}>
      <ExpenseForm></ExpenseForm>
      <Card maxW="md">
        <CardBody>
          <ExpenseFilter
            onSelectedCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((ex) => ex.id !== id))
            }
          ></ExpenseList>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default App;
