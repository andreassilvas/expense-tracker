import {
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Tfoot,
} from "@chakra-ui/react";
import "./ExpenseList.css";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpensesListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpensesListProps) => {
  if (expenses.length === 0)
    return <div className="no-items">There are no items in this category</div>;

  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th color="header.dark">Description</Th>
            <Th color="header.dark">Amount</Th>
            <Th color="header.dark">Category</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((item) => (
            <Tr key={item.id}>
              <Td>{item.description}</Td>
              <Td>$ {item.amount}</Td>
              <Td>{item.category}</Td>
              <Td>
                <Button
                  onClick={() => onDelete(item.id)}
                  height="25px"
                  width="60px"
                  border="1px"
                  borderRadius="5px"
                  fontSize="12px"
                  bg="#ffffff"
                  borderColor="#cc0000"
                  color="#cc0000"
                  _hover={{ bg: "#cc0000", color: "#ffffff" }}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td color="header.dark" fontWeight="semibold">
              Total:
            </Td>
            <Td color="header.dark" fontWeight="semibold">
              ${" "}
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
