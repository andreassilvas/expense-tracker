import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Row } from "react-bootstrap";
import expenseCategories from "../expense-categories";
import { useForm } from "react-hook-form";
import "./ExpensesStyle.css";

//create schema validation
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  category: z.enum(expenseCategories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <Form
      className=" border-bottom"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <Row className="mb-3 mt-4 g-2">
        <Form.Group as={Col} controlId="descriptionInput">
          <Form.Control
            {...register("description")}
            type="text"
            placeholder="Description"
            aria-label="Description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="amountInput">
          <Form.Control
            {...register("amount", { valueAsNumber: true })}
            type="number"
            placeholder="Amount"
            aria-label="Amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="categoriesInput">
          <Form.Select
            {...register("category")}
            defaultValue="Category"
            aria-label="Categories"
          >
            <option>Select Category</option>
            {expenseCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col}>
          <Button type="submit">Add Expense</Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default ExpenseForm;
