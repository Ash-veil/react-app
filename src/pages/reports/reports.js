import BreadCrumb from "../../components/partials/breadCrumb";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getRevenues } from "../../api/revenue";
import { getCustomers } from "../../api/customers";
import { getExpenses } from "../../api/expenses";
import ExpensesType from "./charts/expensesType";
import ExpenseRevenueLines from "./charts/expenseRevenueLines";

ChartJS.register(ArcElement, Tooltip, Legend);

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
