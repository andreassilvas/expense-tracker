import expenseCategories from "../expense-categories";

interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <select
      className="form-select mb-3 text-secondary"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option disabled selected>
        Filter Category
      </option>
      {expenseCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
