import { Button, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 80, category: "Utilities" },
    { id: 2, description: "Milk", amount: 10, category: "Groceries" },
    { id: 3, description: "Mathematics", amount: 10, category: "Education" },
  ]);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
    >
      <Card>
        <CardBody>
          <ExpenseFilter
            onSelectedCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
          <ExpenseList
            expenses={expenses}
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
