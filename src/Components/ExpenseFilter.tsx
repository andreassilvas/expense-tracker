import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Select,
  Stack,
} from "@chakra-ui/react";
import expenseCategories from "../expense-categories";

interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <Select
      onChange={(event) => onSelectedCategory(event.target.value)}
      placeholder="Select category"
      variant="filled"
      color="body.light"
      marginBottom="25px"
    >
      {expenseCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default ExpenseFilter;
