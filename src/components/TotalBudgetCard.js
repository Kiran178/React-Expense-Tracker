import BudgetCard from "./BudgetCard";
import { useBudgets } from "../context/BudgetContext";

export default function TotalBudgetCard(props) {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);

  if (max === 0) return null;
  return (
    <BudgetCard grayBg amount={amount} name="Total" max={max} hideButtons />
  );
}
