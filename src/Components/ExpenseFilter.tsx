import { Form } from "react-bootstrap";
import expenseCategories from "../expense-categories";
import "./ExpensesStyle.css";

interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <div className="row g-1 align-items-center mt-2 mb-3">
      <div className="col-auto">
        <label htmlFor="expense-filter-text" className="visually-hidden">
          Filter Category
        </label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          id="expense-filter-text"
          value="Filter Category"
        />
      </div>
      <div className="col-auto">
        <Form.Select
          aria-label="Expense filter"
          id="expense-filter"
          size="sm"
          onChange={(event) => onSelectedCategory(event.target.value)}
        >
          {expenseCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
