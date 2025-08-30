import BreadCrumb from "../../components/partials/breadCrumb";
import ExpensesType from "./charts/expensesType";
import ExpenseRevenueLines from "./charts/expenseRevenueLines";

const Reports = () => {
  return (
    <div className="container-fluid px-4">
      <BreadCrumb currentPage="Reports" />
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

export default Reports;
