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
    return <div className="no-items">there are no items in this category</div>;

  return (
    <table className="table table-sm">
      <thead>
        <tr className="text-light bg-secondary">
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
        <tr className="text-light bg-secondary">
          <td>Total:</td>
          <td colSpan={3}>
            ${" "}
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
