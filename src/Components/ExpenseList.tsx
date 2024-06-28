import { Table } from "react-bootstrap";

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
    return <div className="text-danger">no items in this category</div>;

  return (
    <div>
      <Table hover responsive="sm">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th colSpan={2}>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id} className="text-secondary">
              <td>{item.description}</td>
              <td>$ {item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td colSpan={3}>
              ${" "}
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default ExpenseList;
