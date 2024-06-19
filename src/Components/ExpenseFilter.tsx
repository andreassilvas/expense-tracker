import { Select, Stack } from "@chakra-ui/react";
import expenseCategories from "../expense-categories";

interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <Stack spacing={3} marginBottom="20px">
      <Select placeholder="Select category" variant="filled" color="#6b6b6b">
        {expenseCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default ExpenseFilter;
