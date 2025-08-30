import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getExpenses } from "../../../api/expenses";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesType = () => {
  const [expenses, setExpenses] = useState([]);

  const list = async () => {
    const Edata = await getExpenses();
    setExpenses(Edata);
  };

  const pieExpenses = expenses.reduce((result, expense) => {
    result[expense.category] = (result[expense.category] || 0) + expense.amount;
    return result;
  }, {});

  useEffect(() => {
    list();
  }, []);
  return (
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1" />
          Expenses by type
        </div>
        <div className="card-body">
          <Pie
            data={{
              labels: Object.keys(pieExpenses),
              datasets: [
                {
                  data: Object.values(pieExpenses),
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#bf5d49ff",
                    "#5f54adff",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
  );
};

export default ExpensesType;
