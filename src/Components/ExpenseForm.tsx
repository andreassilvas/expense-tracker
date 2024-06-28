import { Button, Col, Form, Row } from "react-bootstrap";
import expenseCategories from "../expense-categories";
import "./ExpensesStyle.css";

const ExpenseForm = () => {
  return (
    <>
      <h5 className="mb-3 text-secondary">Expense Tracker</h5>
      <Form className=" border-bottom">
        <Row className="mb-3 g-1" size="sm">
          <Form.Group as={Col} controlId="descriptionInput">
            <Form.Control
              type="text"
              placeholder="Description"
              size="sm"
              aria-label="Description"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="amountInput">
            <Form.Control
              type="number"
              placeholder="Amount"
              size="sm"
              aria-label="Amount"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="categoriesInput">
            <Form.Select
              defaultValue="Category"
              aria-label="Categories"
              size="sm"
            >
              <option>select category</option>
              {expenseCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Button className="btn-sm" type="submit">
              Add Expense
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default ExpenseForm;
