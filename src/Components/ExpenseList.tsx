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
  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
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
                  as="button"
                  height="30px"
                  border="1px"
                  borderRadius="5px"
                  fontSize="14px"
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
            <Td color="#003366" fontWeight="semibold">
              Total:
            </Td>
            <Td color="#003366" fontWeight="semibold">
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
