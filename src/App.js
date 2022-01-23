import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModel from "./components/AddBudgetModel";
import { useBudgets } from "./context/BudgetContext";
function App() {
  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false);

  const handleClose = () => setShowAddBudgetModel(false);
  const handleShow = () => setShowAddBudgetModel(true);

  const { budgets, getBudgetExpenses } = useBudgets();
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Expense Tracker</h1>
          <Button variant="primary" onClick={handleShow}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignIteams: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            );
          })}
        </div>
      </Container>
      <AddBudgetModel show={showAddBudgetModel} onHide={handleClose} />
    </>
  );
}

export default App;
