import CardsRow from "../components/cardsRow";
import BreadCrumb from "../components/partials/breadCrumb";
import ExpensesType from "./reports/charts/expensesType";
import ExpenseRevenueLines from "./reports/charts/expenseRevenueLines";

const Dashboard = () => {
  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage="Main" />
      <CardsRow />
      <div className="row">
        <div className="col-xl-8">
          <ExpenseRevenueLines />
        </div>
        <div className="col-xl-4">
          <ExpensesType />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
