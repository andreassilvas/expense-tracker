import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const ExpenseForm = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Heading size="sm" textTransform="uppercase" color="header.dark">
          Expense Tracker
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <FormControl>
            <FormLabel color="body.light">Description</FormLabel>
            <Input type="text" />
            <FormLabel color="body.light">Amount</FormLabel>
            <Input type="number" />
            <FormLabel color="body.light">Category</FormLabel>
            <Input type="text" />
            <CardFooter mt="6" p="0">
              <Button colorScheme="teal" type="submit">
                Submit
              </Button>
            </CardFooter>
          </FormControl>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ExpenseForm;
