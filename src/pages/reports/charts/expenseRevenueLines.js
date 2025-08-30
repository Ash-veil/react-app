import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getExpenses } from "../../../api/expenses";
import { getRevenues } from "../../../api/revenue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const ExpenseRevenueLines = () => {
  const [expenses, setExpenses] = useState([]);
  const [revenues, setRevenues] = useState([]);

  const list = async () => {
    const Edata = await getExpenses();
    const Rdata = await getRevenues();
    setExpenses(Edata);
    setRevenues(Rdata);
  };

  const labels = [
    ...new Set([
      ...expenses.map((e) => e.date),
      ...revenues.map((r) => r.date),
    ]),
  ].sort();

  const expensesData = labels.map((date) => {
    const total = expenses
      .filter((e) => e.date === date)
      .reduce((sum, e) => sum + e.amount, 0);
    return total;
  });
   const revenuesData = labels.map((date) => {
    const total = revenues
      .filter((r) => r.date === date)
      .reduce((sum, r) => sum + r.amount, 0);
      console.log(total)
    return total;
  });

  const data = {
    labels,
    datasets: [
        {
            label: "Expenses",
            data: expensesData,
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.3)"
        },
        {
            label: "Revenues",
            data: revenuesData,
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.3)"
        }
    ]
  }

  const options = {
    plugins: {
        title: {
            display: true,
            text: "Expenses VS Revenue Over Time"
        }
    }
  }

  useEffect(() => {
    list();
  }, []);
  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-chart-area me-1" />
        Expenses and Revenues by date
      </div>
      <div className="card-body">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseRevenueLines;
